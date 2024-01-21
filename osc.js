(function () {

    'use strict';

    function createTabEvents () {
        let rawTabs = [...document.getElementsByClassName('tab')]
            .slice(1);

        /**
         * Returns the content element that corresponds to the passed navbar tab
         * @param {HTMLElement} tab - The navbar tab element
         * @returns {HTMLElement} - The corresponding content element
         */
        function getTabContent (tab) {
            return document.getElementById(tab.id + "-content");
        }

        /**
         * Makes all tabs inactive
         */
        function makeAllTabsInactive () {
            rawTabs.forEach((tab) => {
                tab.classList.remove('active');
                getTabContent(tab).classList.remove('active');
            });
        }

        /**
         * Makes the passed tab active
         * @param {HTMLElement} tab - The tab to make active
         */
        function makeTabActive (tab) {
            tab.classList.add('active');
            getTabContent(tab).classList.add('active');
        }

        rawTabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                makeAllTabsInactive();
                makeTabActive(tab);
            });
        });
    }

    createTabEvents();

})();