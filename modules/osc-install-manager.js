(function () {

    'use strict';

    const { spawn } = require('child_process');
    const notificationsManager
        = require('../ui_controllers/notification-manager');

    module.exports = exports = { liveUpdate, checkForInternetConnection };

    /**
     * Checks for an internet connection
     * @returns {Promise<void>}
     */
    async function checkForInternetConnection () {
        let ping = spawn('ping', ['1.1.1.1']);
        let connection = true;

        ping.stdout.on('data', (data) => {
            if (data.includes('failed') && connection) {
                notificationsManager.spawnNotification(
                    'No internet connection',
                    'Open Software Controller requires an internet' +
                    ' connection to check for updates and clone repositories.',
                    notificationsManager.ERROR);
                connection = false;
            }
        });
    }

    /**
     * Updates the Open Software Controller installation
     * @returns {Promise<void>}
     */
    async function liveUpdate () {
        /*
        TODO: This only works if the user cloned the repository, if they
         downloaded the release version, there will be no repo to pull from
        TODO: The "Update Available" notification should only be spawned once
         per update cycle, not every time the stdout event is emitted
        */
        const pull = spawn('git', ['pull']);
        const updated = false;

        pull.stdout.on('data', (data) => {
            if (data.includes('Already up to date.')) {
                notificationsManager.spawnNotification(
                    'Already up to date',
                    'Your installed version of Open Software Controller' +
                    ' is already up to date.',
                    notificationsManager.INFO);
            } else {
                notificationsManager.spawnNotification(
                    'Update available',
                    'An update for Open Software Controller is' +
                    ' available and will be installed.',
                    notificationsManager.INFO);
            }
        });

        pull.stderr.on('data', (data) => {
            notificationsManager.spawnNotification(
                'Update error',
                'An error occurred while updating Open Software' +
                ' Controller. Details: ' + data,
                notificationsManager.ERROR);
        });

        pull.on('close', (code) => {
            if (updated) {
                notificationsManager.spawnNotification(
                    'Update complete',
                    'Open Software Controller has been updated.' +
                    ' Details: ' + code,
                    notificationsManager.INFO);
            }
        });
    }

})();