(function () {

    'use strict';

    module.exports = exports = { switcher };

    /**
     * Switches arguments based on the current platform
     * @param {Args} args
     * @param {Function} callback
     */
    function switcher (args, callback) {
        switch (process.platform) {
            case 'linux':
                callback(args.linux);
                break;
            case 'darwin':
                callback(args.darwin);
                break;
            case 'win32':
                callback(args.win32);
                break;
        }
    }

    /**
     * @typedef {Object} Args
     * @property {any} linux
     * @property {any} darwin
     * @property {any} win32
     */

})();