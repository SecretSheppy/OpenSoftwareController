(function () {

    'use strict';

    module.exports = exports = { openInDefault };

    /**
     * Opens a URL in the default browser
     * @param {string} url
     */
    function openInDefault (url) {
        nw.Shell.openExternal(url);
    }

})();