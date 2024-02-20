(function () {

    'use strict';

    const { execSync } = require('child_process');
    const platformSwitch = require('../modules/platform-switch');
    const browser = require('../modules/browser');
    const oscInstallManager = require('../modules/osc-install-manager');

    module.exports = exports = createMenuBarEvents;

    /**
     * Focuses the menu bar
     */
    function focusMenuBar () {
        [...document.getElementsByClassName('item-wrapper')]
            .forEach(function (element) {
                element.classList.add('menu-bar-focused');
            });
    }

    /**
     * Blurs the menu bar
     */
    function blurMenuBar () {
        [...document.getElementsByClassName('item-wrapper')]
            .forEach(function (element) {
                element.classList.remove('menu-bar-focused');
            });
    }

    /**
     * Creates the menu bar events
     */
    function createMenuBarEvents () {

        document.getElementById('menu-bar')
            .addEventListener('mouseover', function () {
                focusMenuBar();
            });

        document.getElementById('menu-bar-settings-button')
            .addEventListener('click', function () {
                document.getElementById('settings-tab').click();
                blurMenuBar();
            });

        document.getElementById('menu-bar-favorites-button')
            .addEventListener('click', function () {
                document.getElementById('library-favorites-tab')
                    .click();
                document.getElementById('library-tab').click();
                blurMenuBar();
            });

        document.getElementById('menu-bar-exit-button')
            .addEventListener('click', function () {
                nw.Window.get().close();
            });

        document.getElementById('menu-bar-open-github-wiki')
            .addEventListener('click', function () {
                browser.openInDefault(
                    require('../package').repository.url
                        .replace(/git\+|\.git/g, '') + "/wiki"
                );
                blurMenuBar();
            });

        document.getElementById('menu-bar-open-github-getting-started')
            .addEventListener('click', function () {
                browser.openInDefault(
                    require('../package').repository.url
                        .replace(/git\+|\.git/g, '') + "/wiki/Getting-Started"
                );
                blurMenuBar();
            });

        document.getElementById('menu-bar-open-install-directory')
            .addEventListener('click', function () {
                platformSwitch.switcher({
                    linux: 'xdg-open .',
                    darwin: 'open .',
                    win32: 'explorer .'
                }, execSync);
                blurMenuBar();
            });

        document.getElementById('menu-bar-open-github')
            .addEventListener('click', function () {
                browser.openInDefault(
                    require('../package').repository.url
                        .replace(/git\+|\.git/g, '')
                );
                blurMenuBar();
            });

        document.getElementById('menu-bar-open-github-issues')
            .addEventListener('click', function () {
                browser.openInDefault(
                    require('../package').repository.url
                        .replace(/git\+|\.git/g, '') + "/issues/new"
                );
                blurMenuBar();
            });

        document.getElementById('menu-bar-osc-update')
            .addEventListener('click', function () {
                oscInstallManager.liveUpdate();
                blurMenuBar();
            });

        document.getElementById('menu-bar-about-button')
            .addEventListener('click', function () {
                document.getElementById('settings-tab').click();
                document.getElementById('settings-about-tab').click();
                blurMenuBar();
            });

    }

})();