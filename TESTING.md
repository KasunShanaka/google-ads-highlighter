# Testing Guide

Quick guide for testing the extension during development.

## Prerequisites

- Google Chrome (version 88+)
- The extension files in this directory

## Installation Steps

1. **Open Chrome Extensions Page**
   - Navigate to `chrome://extensions/`
   - Or use Menu → More Tools → Extensions

2. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Navigate to and select this project directory
   - The extension should now appear in your extensions list

## Testing the Extension

### Basic Functionality Test

1. Go to [Google](https://www.google.com)
2. Search for commercial terms like:
   - "buy laptop"
   - "car insurance"
   - "web hosting"
   - "best credit cards"
3. Look for sponsored/ad results (usually at the top)
4. Verify they have a golden border and subtle background

### What to Look For

- ✅ Sponsored sections have golden borders
- ✅ Styling is applied smoothly
- ✅ No console errors in DevTools
- ✅ No page layout breaks
- ✅ Works when scrolling and loading more results
- ✅ Dynamically loaded ads get highlighted

### Console Debugging

1. Open Chrome DevTools (F12 or Cmd+Option+I)
2. Go to the Console tab
3. You should see: `Google Sponsored Highlighter: Initialized`
4. Check for any error messages (red text)

### Inspect Elements

1. Right-click on a highlighted ad
2. Select "Inspect"
3. Look for `data-sponsored-highlight="true"` attribute
4. Verify styles are applied in the Styles panel

## Common Issues

### Extension Not Loading

- **Check manifest.json**: Ensure no JSON syntax errors
- **Check file paths**: All paths in manifest must be correct
- **Check permissions**: Ensure you have permission to load extensions

### Ads Not Highlighting

- **Check selectors**: Google may have updated their HTML structure
- **Open console**: Look for JavaScript errors
- **Try different searches**: Some searches may not have sponsored results
- **Wait a moment**: Dynamic content may take a second to load

### Performance Issues

- **Check console**: Look for excessive logging
- **Monitor CPU**: Open Task Manager (Shift+Esc in Chrome)
- **Adjust debounce delay**: Increase `CONFIG.debounceDelay` in content.js

## Making Changes

After editing any file:

1. Go to `chrome://extensions/`
2. Click the refresh icon ↻ on the extension card
3. Reload the Google search page
4. Test your changes

## Debugging Tips

### View Background Service Worker Logs

1. Go to `chrome://extensions/`
2. Find your extension
3. Click "service worker" link (appears when active)
4. This opens DevTools for the background script

### View Content Script Logs

1. Open any Google search page
2. Open DevTools (F12)
3. Console tab shows content script logs

### Check Applied Styles

1. Right-click a highlighted element
2. Inspect element
3. Check the Styles panel in DevTools
4. Look for inline styles applied by the extension

## Test Cases

Create a checklist and test each scenario:

- [ ] Fresh installation works
- [ ] Extension icon appears in toolbar
- [ ] Ads highlighted on google.com
- [ ] Ads highlighted on google.co.uk (or other domains)
- [ ] Works with Chrome in light mode
- [ ] Works with Chrome in dark mode
- [ ] No console errors
- [ ] Performance is acceptable
- [ ] Dynamically loaded ads get highlighted
- [ ] Page scrolling still smooth
- [ ] Extension can be disabled/enabled
- [ ] Works after Chrome restart

## Reporting Issues

When reporting bugs, include:

1. Chrome version (`chrome://version/`)
2. Extension version
3. Steps to reproduce
4. Console errors (if any)
5. Screenshots (if applicable)

---

Happy testing! 🧪
