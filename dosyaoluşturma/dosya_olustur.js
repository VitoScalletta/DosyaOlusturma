const fs = require('fs');
const path = require('path');

const klasorAdi = 'ornek';
const htmlKlasoru = path.join(__dirname, klasorAdi, 'html');
const cssKlasoru = path.join(__dirname, klasorAdi, 'css');
const jsKlasoru = path.join(__dirname, klasorAdi, 'js');

// Klasörleri oluşturma
fs.mkdirSync(klasorAdi);
fs.mkdirSync(htmlKlasoru);
fs.mkdirSync(cssKlasoru);
fs.mkdirSync(jsKlasoru);

// Dosyaları oluşturma
fs.writeFileSync(path.join(htmlKlasoru, 'index.html'), '');
fs.writeFileSync(path.join(cssKlasoru, 'index.css'), '');
fs.writeFileSync(path.join(jsKlasoru, 'index.js'), '');

console.log('Dosyalar oluşturuldu.');
