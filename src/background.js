/**
 * Background Service Worker
 * Handles extension lifecycle events
 */

// Listen for installation
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('Google Sponsored Highlighter installed');
    } else if (details.reason === 'update') {
        console.log('Google Sponsored Highlighter updated to version', chrome.runtime.getManifest().version);
    }
});

// Optional: Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
    // Could be used to toggle highlighting on/off in future versions
    console.log('Extension icon clicked on tab:', tab.id);
});
