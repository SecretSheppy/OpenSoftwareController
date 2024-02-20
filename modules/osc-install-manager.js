(function () {

    'use strict';

    const { spawn } = require('child_process');
    const notificationsManager
        = require('../ui_controllers/notification-manager');

    module.exports = exports = { liveUpdate };

    /**
     * Updates the Open Software Controller installation
     * @returns {Promise<void>}
     */
    async function liveUpdate () {
        /*
        TODO: This only works if the user cloned the repository, if they
         downloaded the release version, there will be no repo to pull from
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
                ' Controller.',
                notificationsManager.ERROR);
        });

        pull.on('close', (code) => {
            if (updated) {
                notificationsManager.spawnNotification(
                    'Update complete',
                    'Open Software Controller has been updated.',
                    notificationsManager.INFO);
            }
        });
    }

})();