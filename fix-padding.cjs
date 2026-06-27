const fs = require('fs');
const path = require('path');
const dir = 'src';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const filePath = path.join(dir, f);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // We want to replace padding: "XYZpx 24px" with padding: "50px 24px"
  // And padding: "0 24px 100px" with padding: "0 24px 50px"
  // And padding: "XYZpx 24px ABCpx" with padding: "50px 24px 50px"
  // Keep in mind not to touch paddingTop: 80, paddingBottom: 40 etc which are in objects directly
  
  const regex1 = /padding:\s*"[0-9]+px 24px"/g;
  if (regex1.test(content)) {
    content = content.replace(regex1, 'padding: "50px 24px"');
    changed = true;
  }

  const regex2 = /padding:\s*"0 24px [0-9]+px"/g;
  if (regex2.test(content)) {
    content = content.replace(regex2, 'padding: "0 24px 50px"');
    changed = true;
  }

  const regex3 = /padding:\s*"[0-9]+px 24px [0-9]+px"/g;
  if (regex3.test(content)) {
    content = content.replace(regex3, 'padding: "50px 24px 50px"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated padding in', f);
  }
});
