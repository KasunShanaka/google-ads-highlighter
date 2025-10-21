# Icons Directory

This directory contains the extension icons in both SVG and PNG formats.

## Icon Files

### icon16.png / icon16.svg

- Size: 16x16 pixels
- Used in: Extension management page
- Format: PNG (required), SVG (source)

### icon48.png / icon48.svg

- Size: 48x48 pixels
- Used in: Extension management page
- Format: PNG (required), SVG (source)

### icon128.png / icon128.svg

- Size: 128x128 pixels
- Used in: Chrome Web Store and installation dialog
- Format: PNG (required), SVG (source)

## Design Concept

The icons feature a magnifying glass with an "Ad" indicator inside, representing the extension's purpose of highlighting sponsored content in search results. The design uses:

- **Golden/Yellow color scheme** (#FDB515, #FFCA28) - matches the highlight styling
- **Magnifying glass** - represents search functionality
- **"Ad" badge** - indicates sponsored content detection
- **Sparkle/star effects** - emphasizes the highlighting feature
- **Clean, modern design** - remains legible at all sizes

## Modifying Icons

The SVG source files can be edited to customize the icon design:

1. Edit the SVG files using any vector graphics editor (Figma, Inkscape, etc.)
2. Run the conversion script to regenerate PNG files:
   ```bash
   cd icons
   node convert-icons.js
   ```

## Conversion Script

The `convert-icons.js` script converts SVG files to PNG format using Node.js Canvas. To use it:

```bash
npm install canvas
node icons/convert-icons.js
```

## Color Palette

- Primary Gold: `#FDB515`
- Light Gold: `#FFCA28`
- Dark Text: `#1A1A1A`
- Accent Red: `#FF6B6B`
- Accent Yellow: `#FFD93D`
