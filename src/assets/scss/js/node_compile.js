const fs = require('fs');
const path = require('path');

// Rutas de los archivos
const jsonPath = path.join(__dirname, '../', 'json', '_variables.json');
const scssPath = path.join(__dirname, '../', 'scss_origin', '_variables_origen.scss');
const outputPath = path.join(__dirname, '../', '_variables.scss');

// Leer el archivo JSON
const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Leer el archivo SCSS
let scssContent = fs.readFileSync(scssPath, 'utf8');

// Reemplazar todas las propiedades del JSON en el SCSS
Object.entries(jsonContent).forEach(([key, value]) => {
  const regex = new RegExp(`\\$${key}:\\s*json\\.\\$${key};`, 'g');
  scssContent = scssContent.replace(regex, `$${key}: ${value};`);
});

// Eliminar la línea que importa el JSON
scssContent = scssContent.replace(/@use ['"]\.\.\/json\/variables\.json['"] as json;/, '');

// Escribir el resultado en _variables2.scss
fs.writeFileSync(outputPath, scssContent);

console.log('Archivo _variables2.scss generado con éxito.');