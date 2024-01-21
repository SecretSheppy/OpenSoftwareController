(function () {

    'use strict';

    const jt = require('./modules/json-tools');
    const win = nw.Window.get();
    const environmentData = jt.load('./data/environment.json');
    const frame = document.getElementById('frame');
    const singleSquareIcon
        = document.getElementById('maximize-square-icon');
    const doubleSquareIcon
        = document.getElementById('maximize-squares-icon');
    const navbar = document.getElementById('navbar');

    function startupProcedure () {
        win.hide();
        win.moveTo(environmentData.position.x, environmentData.position.y);
        win.resizeTo(environmentData.size.width, environmentData.size.height);
        if (environmentData.maximized) {
            win.maximize();
        }
    }

    document.getElementById('title-bar-minimize-button')
        .addEventListener('click', function () {
            win.minimize();
        });

    document.getElementById('title-bar-maximize-button')
        .addEventListener('click', function () {
            if (environmentData.maximized) {
                win.restore();
                environmentData.maximized = false;
            } else {
                win.maximize();
                environmentData.maximized = true;
            }
        });

    document.getElementById('title-bar-close-button')
        .addEventListener('click', function () {
            win.close();
        });

    document.getElementById('navbar-expansion-toggle')
        .addEventListener('click', function () {
            if (navbar.classList.contains('expanded')) {
                navbar.classList.remove('expanded');
            } else {
                navbar.classList.add('expanded');
            }
        });

    win.on('maximize', function () {
        frame.style.border = "none";
        frame.style.borderRadius = "0";
        singleSquareIcon.style.display = "none";
        doubleSquareIcon.style.display = "block";
    });

    win.on('restore', function () {
        frame.removeAttribute('style');
        singleSquareIcon.style.display = "block";
        doubleSquareIcon.style.display = "none";
    });

    win.on('move', function () {
        environmentData.position.x = win.x;
        environmentData.position.y = win.y;
    });

    win.on('resize', function () {
        environmentData.size.width = win.width;
        environmentData.size.height = win.height;
    });

    win.on('close', function () {
        jt.save('./data/environment.json', environmentData);
        win.close(true);
    });

    win.on('loaded', function () {
        win.show();
    });

    startupProcedure();

    /**
     * @typedef
     * @type {Object} environmentData
     * @property {Object} position
     * @property {Number} position.x
     * @property {Number} position.y
     * @property {Object} size
     * @property {Number} size.width
     * @property {Number} size.height
     * @property {Boolean} maximized
     */

})();