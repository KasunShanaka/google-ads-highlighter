const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

async function convertSvgToPng(svgPath, pngPath, size) {
    try {
        // Read the SVG file
        const svgData = fs.readFileSync(svgPath, 'utf8');

        // Create a data URL
        const svgDataUrl = 'data:image/svg+xml;base64,' + Buffer.from(svgData).toString('base64');

        // Create canvas
        const canvas = createCanvas(size, size);
        const ctx = canvas.getContext('2d');

        // Load and draw the image
        const img = await loadImage(svgDataUrl);
        ctx.drawImage(img, 0, 0, size, size);

        // Save as PNG
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(pngPath, buffer);

        console.log(`✓ Created ${pngPath}`);
    } catch (error) {
        console.error(`✗ Error converting ${svgPath}:`, error.message);
    }
}

async function main() {
    const iconsDir = __dirname;

    console.log('Converting SVG icons to PNG...\n');

    await convertSvgToPng(`${iconsDir}/icon16.svg`, `${iconsDir}/icon16.png`, 16);
    await convertSvgToPng(`${iconsDir}/icon48.svg`, `${iconsDir}/icon48.png`, 48);
    await convertSvgToPng(`${iconsDir}/icon128.svg`, `${iconsDir}/icon128.png`, 128);

    console.log('\nAll icons converted successfully!');
}

main().catch(console.error);
