(function () {

    'use strict';

    module.exports = exports = { openInDefault };

    function openInDefault (url) {
        nw.Shell.openExternal(url);
    }

})();