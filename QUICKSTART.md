# Quick Start Guide

Get up and running with the Google Sponsored Results Highlighter extension in 5 minutes!

## For Users

### Installation (Chrome Web Store - Coming Soon)

1. Visit the Chrome Web Store link (will be added)
2. Click "Add to Chrome"
3. Confirm by clicking "Add extension"
4. That's it! Start searching on Google

### Manual Installation (Developer Version)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right)
4. Click "Load unpacked" and select the extension folder
5. Visit Google and search - ads will be highlighted!

## For Developers

### Setup (< 2 minutes)

```bash
# Clone the repository
git clone https://github.com/kasunshanaka/google-ads-highlighter.git
cd google-ads-highlighter

# Load in Chrome
# 1. Open chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked"
# 4. Select this directory
```

### Making Changes

1. Edit files in `src/` directory
2. Reload extension in `chrome://extensions/`
3. Refresh any Google search page
4. Test your changes

### Project Structure

```
src/content.js    - Main highlighting logic
src/background.js - Extension lifecycle
manifest.json     - Extension configuration
```

## Important Notes

### Icons Missing

The extension references icon files that don't exist yet. To fix:

**Option 1: Remove icon references temporarily**
Edit `manifest.json` and remove the `icons` and `action.default_icon` sections.

**Option 2: Create simple icons**

```bash
# Create placeholder icons (requires ImageMagick)
cd icons
convert -size 16x16 xc:gold -fill black -draw "circle 8,8 8,2" icon16.png
convert -size 48x48 xc:gold -fill black -draw "circle 24,24 24,6" icon48.png
convert -size 128x128 xc:gold -fill black -draw "circle 64,64 64,16" icon128.png
```

Or use an online tool like [favicon.io](https://favicon.io/) to generate icons.

### Old File Cleanup

Delete the old `content.js` in the root directory (the new one is in `src/`):

```bash
rm content.js
```

## Testing Checklist

✅ Essential tests before using:

- [ ] Extension loads without errors
- [ ] Search on Google shows results
- [ ] Ads have golden borders
- [ ] No console errors (F12)
- [ ] Page loads smoothly

## Customization

Want different colors? Edit `src/content.js`:

```javascript
const CONFIG = {
  styles: {
    border: "2px solid rgba(255, 0, 0, 0.7)", // Red border
    background:
      "linear-gradient(145deg, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.05))",
    // ... other styles
  },
};
```

## Common Issues

**Extension won't load**

- Check manifest.json for syntax errors
- Make sure all referenced files exist
- Check Chrome console for errors

**Ads not highlighting**

- Open DevTools (F12) and check console
- Try searching for "buy laptop" or "web hosting"
- Some searches may not have ads
- Wait a second for dynamic content

**Performance issues**

- Increase debounce delay in CONFIG (default 300ms)
- Check for console errors

## Next Steps

1. ⭐ Star the repository
2. 🐛 Report bugs in [Issues](https://github.com/kasunshanaka/google-ads-highlighter/issues)
3. 💡 Suggest features in [Discussions](https://github.com/kasunshanaka/google-ads-highlighter/discussions)
4. 🤝 Contribute code (see [CONTRIBUTING.md](CONTRIBUTING.md))
5. 📢 Share with others!

## Resources

- 📖 [Full Documentation](README.md)
- 🧪 [Testing Guide](TESTING.md)
- 🤝 [Contributing Guide](CONTRIBUTING.md)
- 📋 [Changelog](CHANGELOG.md)
- 🔧 [Improvements Summary](IMPROVEMENTS.md)

## Support

Need help?

- 💬 [GitHub Discussions](https://github.com/kasunshanaka/google-ads-highlighter/discussions)
- 🐛 [Report Issues](https://github.com/kasunshanaka/google-ads-highlighter/issues)

---

**Ready to go!** 🚀 Start searching on Google and see sponsored results highlighted!
