# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-21

### Added

- Initial release of Google Sponsored Results Highlighter
- Automatic detection and highlighting of sponsored content in Google search results
- Support for multiple Google domains (google.com, google.\*, etc.)
- Dynamic content monitoring with MutationObserver
- Distinctive golden gradient styling for ads
- Performance optimization with debouncing
- WeakSet for efficient element tracking
- Proper error handling and logging
- Background service worker for extension lifecycle
- Comprehensive documentation (README, CONTRIBUTING, LICENSE)

### Fixed

- Memory leak prevention with proper observer cleanup
- Performance issues with excessive DOM mutations
- Edge cases with dynamically loaded content

### Technical Details

- Uses Manifest V3 for Chrome extensions
- IIFE pattern for better code isolation
- Responsive to page unload events to prevent memory leaks
- Configurable selectors and styling options

## [Unreleased]

### Planned Features

- Toggle button to enable/disable highlighting
- Customizable color schemes
- Support for additional search engines (Bing, DuckDuckGo)
- Statistics tracking for sponsored results
- User preferences/options page
- Dark mode support

---

## Version History

- **1.0.0** - Initial open source release
