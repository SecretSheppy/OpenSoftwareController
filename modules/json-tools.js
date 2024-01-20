(function () {

    'use strict';

    const fs = require('fs');

    module.exports = exports = { load, save };

    /**
     * Load JSON file
     * @param path
     * @returns {any}
     */
    function load (path) {
        return JSON.parse(fs.readFileSync(path, 'utf8'));
    }

    /**
     * Save JSON file
     * @param path
     * @param data
     */
    function save (path, data) {
        fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
    }

})();