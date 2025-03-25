const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public');
const outputDir = path.join(__dirname, 'public', 'optimized');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Image conversion function
async function convertImage(inputPath, outputPath) {
  try {
    // Convert to WebP
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(`${outputPath}.webp`);

    // Convert to AVIF
    await sharp(inputPath)
      .avif({ quality: 80 })
      .toFile(`${outputPath}.avif`);

    console.log(`Converted: ${inputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

// Recursive image conversion
function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      const relativePath = path.relative(inputDir, fullPath);
      const outputPath = path.join(outputDir, relativePath.replace(/\.[^.]+$/, ''));
      
      // Ensure output subdirectory exists
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });

      convertImage(fullPath, outputPath);
    }
  });
}

// Start conversion
processDirectory(inputDir);

console.log('Image optimization complete!');