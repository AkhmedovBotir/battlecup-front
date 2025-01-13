import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImage(inputPath, outputPath, options = {}) {
  const { width, quality } = options;
  
  try {
    let pipeline = sharp(inputPath);
    
    if (width) {
      pipeline = pipeline.resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    await pipeline
      .webp({ quality: quality || 80 })
      .toFile(outputPath);

    console.log(`Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function main() {
  const publicDir = path.join(__dirname, '../public');
  const bannerPath = path.join(publicDir, 'banner.png');
  
  if (await fs.access(bannerPath).then(() => true).catch(() => false)) {
    await optimizeImage(bannerPath, path.join(publicDir, 'banner.webp'), {
      width: 1920,
      quality: 85
    });
  }
}

main().catch(console.error);
