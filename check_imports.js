import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const importRegex = /import\s+.*?\s+from\s+['"](\.[^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importPath = match[1];
    let absolutePath = path.resolve(path.dirname(filePath), importPath);
    
    // Auto-resolve extensions if missing
    if (!fs.existsSync(absolutePath)) {
      if (fs.existsSync(absolutePath + '.jsx')) absolutePath += '.jsx';
      else if (fs.existsSync(absolutePath + '.js')) absolutePath += '.js';
      else if (fs.existsSync(absolutePath + '.css')) absolutePath += '.css';
    }

    if (!fs.existsSync(absolutePath)) {
      console.log(`ERROR: Missing file in ${filePath} -> ${importPath}`);
      continue;
    }

    // STRICT CASE CHECK
    const dir = path.dirname(absolutePath);
    const base = path.basename(absolutePath);
    const actualFiles = fs.readdirSync(dir);
    
    if (!actualFiles.includes(base)) {
      console.log(`CASE ERROR in ${filePath}: imported '${base}', but actual file is likely different case!`);
      // Find the actual file name
      const actualName = actualFiles.find(f => f.toLowerCase() === base.toLowerCase());
      console.log(`   -> Should probably be: ${actualName}`);
    }
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      checkFile(fullPath);
    }
  }
}

console.log('Running STRICT case-sensitive import check...');
traverse(srcDir);
console.log('Done.');
