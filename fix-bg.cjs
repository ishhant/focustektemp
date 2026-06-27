const fs = require('fs');
const path = require('path');
const dir = 'src';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace background: idx % 2 === 1 ? '#f8f9fa' : 'transparent'
  if (content.includes('idx % 2 === 1 ? "#f8f9fa" : "transparent"')) {
    content = content.replace(/idx % 2 === 1 \? "#f8f9fa" : "transparent"/g, '"transparent"');
    changed = true;
  }

  // Replace hardcoded <section> background: "#fff" or "#f8f9fa"
  const sectionRegex = /<section([^>]+)style=\{\{([^>]+)background:\s*"(?:#fff|#ffffff|#f8f9fa)"([^>]*)\}\}/g;
  if (sectionRegex.test(content)) {
    content = content.replace(sectionRegex, '<section$1style={{$2background: "transparent"$3}}');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', f);
  }
});
