const fs = require("fs");
const path = require("path");

// Caminho para a pasta de exportação (out)
const outDir = path.join(__dirname, "out");

// Função para substituir caminhos absolutos por relativos
function fixPaths(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const updatedContent = content.replace(/(href|src)="\//g, '$1="');
  fs.writeFileSync(filePath, updatedContent, "utf8");
}

// Percorre todos os arquivos HTML na pasta de exportação
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processFiles(filePath); // Recursão para subdiretórios
    } else if (file.endsWith(".html")) {
      fixPaths(filePath); // Processa arquivos HTML
    }
  }
}

// Executa o script
processFiles(outDir);
console.log("Caminhos absolutos substituídos por relativos no HTML.");