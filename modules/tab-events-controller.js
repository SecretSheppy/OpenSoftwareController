(function () {

    'use strict';

    const string = require('./string-tools');

    module.exports = exports = { createTabEvents };

    /**
     * Get the tab content element by the tab id
     * @param {string} tabId
     * @returns {HTMLElement}
     */
    function getTabsContent (tabId) {
        return document.getElementById(tabId + "-content");
    }

    /**
     * Make all tabs inactive
     * @param {Array} tabs
     */
    function makeAllTabsInactive (tabs) {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
            getTabsContent(tab.id).classList.remove('active');
        });
    }

    /**
     * Make the tab active
     * @param {HTMLElement} tab
     */
    function makeTabActive (tab) {
        tab.classList.add('active');
        getTabsContent(tab.id).classList.add('active');
    }

    /**
     * Set the window title to the tab name
     * @param {HTMLElement} tab
     */
    function setWindowTitleToTab (tab) {
        document.title = "Open Software Controller - "
            + string.capitalizeFirstLetter(tab.id.replace(/-tab/g, ''));
    }

    /**
     * Create event listeners for all tabs in a tabbed section
     * @param {HTMLElement} tabbedSectionWrapper
     * @param {Array} ignoreTabsInPosition
     * @param {Boolean} setWindowTitle
     */
    function createTabEvents (tabbedSectionWrapper, ignoreTabsInPosition = [],
                              setWindowTitle = false) {
        let tabs = [...tabbedSectionWrapper.getElementsByClassName('tab')];

        ignoreTabsInPosition.map((position) => { 
            tabs.splice(position, 1)
        });

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                makeAllTabsInactive(tabs);
                makeTabActive(tab);
                if (setWindowTitle) setWindowTitleToTab(tab);
            });
        });

        tabs[0].click();
    }

})();