# Contributing to Google Sponsored Results Highlighter

First off, thank you for considering contributing to this project! 🎉

The following is a set of guidelines for contributing. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Style Guide](#javascript-style-guide)
- [Additional Notes](#additional-notes)

## Code of Conduct

This project and everyone participating in it is governed by a code of respect and professionalism. By participating, you are expected to uphold this code. Please be respectful and constructive in your interactions.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

**Bug Report Template:**

```markdown
**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:

1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Environment:**

- OS: [e.g. Windows 10, macOS 13]
- Chrome Version: [e.g. 120.0.6099.109]
- Extension Version: [e.g. 1.0.0]

**Additional context**
Add any other context about the problem here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any similar features in other extensions** (if applicable)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following the style guidelines
3. **Test your changes** thoroughly
4. **Update documentation** if needed
5. **Write a clear commit message**
6. **Submit the pull request**

**Pull Request Template:**

```markdown
**Description**
A clear description of what this PR does.

**Related Issue**
Fixes #(issue number)

**Type of Change**

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

**Testing**
Describe the tests you ran and how to reproduce them:

- [ ] Tested on Chrome
- [ ] Tested with various Google search queries
- [ ] No console errors
- [ ] Highlighted elements appear correctly

**Checklist**

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have tested my changes and they work as expected
```

## Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/kasunshanaka/google-ads-highlighter.git
   cd google-ads-highlighter
   ```

2. **Load the extension in Chrome**
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the project directory

3. **Make changes**
   - Edit files in the `src/` directory
   - Reload the extension in `chrome://extensions/`
   - Test your changes

4. **Test thoroughly**
   - Search on Google with various queries
   - Check browser console for errors
   - Verify highlighting works correctly

## Style Guidelines

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

**Examples:**

```
feat: Add support for Google Shopping ads
fix: Resolve memory leak in MutationObserver
docs: Update installation instructions
refactor: Improve selector performance
style: Format code with consistent spacing
test: Add tests for edge cases
```

**Commit Message Prefixes:**

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### JavaScript Style Guide

- Use **strict mode**: `'use strict';`
- Use **const** for constants, **let** for variables
- Use **meaningful variable names**
- Add **comments** for complex logic
- Follow **DRY principle** (Don't Repeat Yourself)
- Use **arrow functions** where appropriate
- Handle **errors gracefully** with try-catch blocks
- Avoid **global variables**
- Use **template literals** for string interpolation
- Add **JSDoc comments** for functions

**Example:**

```javascript
/**
 * Apply highlight styles to an element
 * @param {HTMLElement} element - The element to highlight
 * @returns {boolean} Success status
 */
function highlightElement(element) {
  if (!element) {
    return false;
  }

  try {
    element.style.border = "2px solid gold";
    return true;
  } catch (error) {
    console.error("Failed to highlight:", error);
    return false;
  }
}
```

## Additional Notes

### File Structure

When adding new files, follow this structure:

```
src/           # All JavaScript source files
icons/         # Extension icons
docs/          # Additional documentation
```

### Testing Checklist

Before submitting your PR, make sure:

- [ ] Extension loads without errors
- [ ] Console has no errors or warnings
- [ ] Highlighting works on google.com
- [ ] Highlighting works on other Google domains (google.co.uk, etc.)
- [ ] No visual glitches or layout issues
- [ ] Performance is acceptable (no lag or freezing)
- [ ] Code is properly commented

### Questions?

Don't hesitate to ask questions in the [Discussions](https://github.com/kasunshanaka/google-ads-highlighter/discussions) section!

---

Thank you for contributing! 🙏
