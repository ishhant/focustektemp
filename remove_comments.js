import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function removeComments(content) {
  // Remove JSX comments: {/* ... */}
  content = content.replace(/\s*\{\/\*[\s\S]*?\*\/\}\s*/g, '\n');
  
  // Remove single-line JS comments: // ...
  // But NOT URLs (http:// https://) and not inside strings
  content = content.replace(/^(\s*)\/\/.*$/gm, '');
  
  // Remove multi-line JS comments: /* ... */
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  // Clean up excessive blank lines (3+ newlines -> 2)
  content = content.replace(/\n{3,}/g, '\n\n');
  
  return content;
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist' && file !== 'assets') {
        processDir(fullPath);
      }
    } else if (fullPath.endsWith('.jsx')) {
      const original = fs.readFileSync(fullPath, 'utf8');
      const cleaned = removeComments(original);
      if (original !== cleaned) {
        fs.writeFileSync(fullPath, cleaned, 'utf8');
        console.log(`Cleaned: ${path.relative(process.cwd(), fullPath)}`);
      }
    }
  }
}

processDir(srcDir);
console.log('Done!');
