const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'dist');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'src/styles.css', 'src/main.js']) {
  const dest = path.join(out, file.replace('src/', ''));
  fs.copyFileSync(path.join(__dirname, '..', file), dest);
}
let html = fs.readFileSync(path.join(out, 'index.html'), 'utf8');
html = html.replace('/src/styles.css', './styles.css').replace('/src/main.js', './main.js');
fs.writeFileSync(path.join(out, 'index.html'), html);
console.log('Built static page to dist/');
