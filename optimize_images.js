import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const backupDir = path.join(__dirname, 'src', 'assets_backup');

if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function optimizeImages(currentDir, currentBackupDir) {
  ensureDirSync(currentBackupDir);
  const files = fs.readdirSync(currentDir);
  
  for (const file of files) {
    const inputPath = path.join(currentDir, file);
    const backupPath = path.join(currentBackupDir, file);
    
    if (fs.statSync(inputPath).isDirectory()) {
      await optimizeImages(inputPath, backupPath);
      continue;
    }
    
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
    
    // Backup original
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
    }
    
    try {
      const metadata = await sharp(backupPath).metadata();
      // Skip very small files that were already optimized
      if (fs.statSync(backupPath).size < 300000 && metadata.width <= 1400) continue;
      
      let img = sharp(backupPath);
      
      if (metadata.width > 1400) {
        img = img.resize({ width: 1400, withoutEnlargement: true });
      }
      
      img = img.sharpen({ sigma: 1.0, m1: 0.8, m2: 0.6 });
      
      if (file.toLowerCase().endsWith('.png')) {
        img = img.png({ quality: 85, compressionLevel: 9 });
      } else {
        img = img.jpeg({ quality: 80, mozjpeg: true });
      }
      
      await img.toFile(inputPath);
      console.log(`Optimized: ${inputPath.replace(assetsDir, '')} (Original width: ${metadata.width}px)`);
    } catch (e) {
      console.error(`Error processing ${file}: ${e.message}`);
    }
  }
}

console.log('Starting recursive optimization...');
optimizeImages(assetsDir, backupDir).then(() => {
  console.log('All images optimized!');
});
