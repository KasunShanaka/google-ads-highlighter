# Google Sponsored Results Highlighter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-blue.svg)](https://chrome.google.com/webstore)

A lightweight Chrome extension that highlights sponsored and advertisement sections in Google search results with distinctive visual styling, making it easier to distinguish between organic and paid content.

## 🌟 Features

- **Automatic Detection**: Intelligently identifies sponsored content and advertisements in Google search results
- **Visual Highlighting**: Applies a distinctive golden gradient border and background to sponsored sections
- **Dynamic Updates**: Monitors page changes and highlights new content as it loads
- **Lightweight**: Minimal performance impact with optimized code
- **Multi-Language Support**: Works across all Google domains (google.com, google.co.uk, google.de, etc.)
- **Privacy-Focused**: No data collection, no external requests, runs entirely locally

## 📸 Screenshots

_Add screenshots here showing before/after views of Google search results_

## 🚀 Installation

### From Chrome Web Store (Recommended)

_Coming soon - Link will be added once published_

### Manual Installation (Developer Mode)

1. **Download the Extension**

   ```bash
   git clone https://github.com/kasunshanaka/google-ads-highlighter.git
   cd google-ads-highlighter
   ```

2. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the `google-ads-highlighter` directory

3. **Verify Installation**
   - The extension icon should appear in your Chrome toolbar
   - Visit [Google](https://www.google.com) and perform a search
   - Sponsored results should now be highlighted with a golden border

## 📖 Usage

Once installed, the extension works automatically:

1. Navigate to Google and perform any search
2. Sponsored and advertisement sections will be highlighted with:
   - Golden border with slight transparency
   - Subtle gradient background
   - Soft shadow effect

No configuration or user interaction needed!

## 🛠️ Development

### Prerequisites

- Google Chrome (version 88 or higher)
- Basic knowledge of JavaScript and Chrome Extension APIs

### Project Structure

```
google-ads-highlighter/
├── src/
│   ├── content.js       # Main content script
│   └── background.js    # Service worker for extension lifecycle
├── icons/               # Extension icons (16x16, 48x48, 128x128)
├── manifest.json        # Extension configuration
├── README.md           # This file
├── CONTRIBUTING.md     # Contribution guidelines
├── LICENSE            # MIT License
└── .gitignore         # Git ignore rules
```

### Building from Source

No build process required! This is a vanilla JavaScript extension.

1. Clone the repository
2. Make your changes to the source files
3. Test using Chrome's developer mode (see Installation section)

### Testing

1. Load the extension in developer mode
2. Open Chrome DevTools (F12)
3. Navigate to Google and search for commercial terms (e.g., "buy laptop")
4. Check console for any errors
5. Verify sponsored results are highlighted correctly

### Debugging

- Check the browser console for any error messages
- Inspect highlighted elements to verify styling is applied
- Use `data-sponsored-highlight` attribute to identify processed elements

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📖 Improve documentation
- 🌍 Add support for more search engines

## 🔧 Configuration

Advanced users can modify the highlighting behavior by editing `src/content.js`:

```javascript
const CONFIG = {
  selectors: [
    // Add or modify CSS selectors for sponsored content
  ],
  styles: {
    // Customize highlight styling
    border: "2px solid rgba(255, 215, 0, 0.7)",
    // ... more styles
  },
  debounceDelay: 300, // Adjust performance (milliseconds)
};
```

## 🐛 Known Issues

- Some dynamically loaded ads may take a moment to be highlighted
- Very aggressive ad blockers might interfere with detection

Please report any issues on our [GitHub Issues](https://github.com/kasunshanaka/google-ads-highlighter/issues) page.

## 📋 Roadmap

- [ ] Add toggle button to enable/disable highlighting
- [ ] Customizable color schemes
- [ ] Support for other search engines (Bing, DuckDuckGo)
- [ ] Statistics on number of sponsored results
- [ ] Options page for user preferences

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Kasun Shanaka**

- GitHub: [@kasunshanaka](https://github.com/kasunshanaka)
- Email: kshanaka10@gmail.com

## 🙏 Acknowledgments

- Inspired by the need for transparent advertising on search engines
- Thanks to all contributors who help improve this extension

## 📞 Support

If you have any questions or need help:

- 📫 Open an issue on [GitHub](https://github.com/kasunshanaka/google-ads-highlighter/issues)
- 💬 Start a discussion in the [Discussions](https://github.com/kasunshanaka/google-ads-highlighter/discussions) tab

## ⭐ Show Your Support

If you find this extension helpful, please consider:

- Giving it a ⭐ on GitHub
- Sharing it with others
- Contributing to the project
- Leaving a review on the Chrome Web Store

---

Made with ❤️ for a more transparent web browsing experience
