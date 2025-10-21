/**
 * Google Sponsored Results Highlighter
 * Highlights sponsored/ad sections in Google search results with visual styling
 */

(function () {
    'use strict';

    // Configuration
    const CONFIG = {
        selectors: [
            'div[data-text-ad="1"]'  // Individual sponsored result items
        ],
        styles: {
            border: '1.5px solid rgba(255, 215, 0, 0.5)',
            borderRadius: '6px',
            background: 'rgba(255, 215, 0, 0.05)',
            boxShadow: '0 1px 4px rgba(255, 215, 0, 0.15)',
            transition: 'all 0.3s ease'
        },
        observerConfig: {
            childList: true,
            subtree: true
        },
        debounceDelay: 300 // milliseconds
    };

    // Keep track of highlighted elements to avoid re-processing
    const highlightedElements = new WeakSet();
    let debounceTimer = null;
    let observer = null;

    /**
     * Apply highlight styles to a container element
     * @param {HTMLElement} container - The container element to highlight
     */
    function applyHighlight(container) {
        if (!container || highlightedElements.has(container)) {
            return;
        }

        try {
            Object.assign(container.style, CONFIG.styles);
            highlightedElements.add(container);

            // Add a data attribute for debugging/testing
            container.setAttribute('data-sponsored-highlight', 'true');
        } catch (error) {
            console.error('Error applying highlight:', error);
        }
    }

    /**
     * Find and highlight all sponsored sections on the page
     */
    function highlightSponsoredSections() {
        try {
            CONFIG.selectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);

                elements.forEach(el => {
                    // Directly highlight the individual sponsored result item
                    // No need to traverse up to find container
                    if (!highlightedElements.has(el)) {
                        applyHighlight(el);
                    }
                });
            });
        } catch (error) {
            console.error('Error highlighting sponsored sections:', error);
        }
    }

    /**
     * Debounced version of highlightSponsoredSections
     * Prevents excessive calls when DOM changes rapidly
     */
    function debouncedHighlight() {
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        debounceTimer = setTimeout(() => {
            highlightSponsoredSections();
            debounceTimer = null;
        }, CONFIG.debounceDelay);
    }

    /**
     * Initialize the extension
     */
    function init() {
        try {
            // Initial highlight
            highlightSponsoredSections();

            // Set up observer for dynamic content
            observer = new MutationObserver(debouncedHighlight);
            observer.observe(document.body, CONFIG.observerConfig);

            console.log('Google Sponsored Highlighter: Initialized');
        } catch (error) {
            console.error('Error initializing sponsored highlighter:', error);
        }
    }

    /**
     * Cleanup function
     */
    function cleanup() {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        if (debounceTimer) {
            clearTimeout(debounceTimer);
            debounceTimer = null;
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Cleanup on page unload to prevent memory leaks
    window.addEventListener('beforeunload', cleanup);

})();
