(function () {

    'use strict';

    module.exports = exports = { capitalizeFirstLetter };

    /**
     * Capitalizes the first letter of the passed string
     * @param {string} string
     * @returns {string}
     */
    function capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

})();