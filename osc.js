(function () {

    'use strict';

    require('./ui_controllers/menu-bar-events')();
    const tabEventsController = require('./ui_controllers/tab-events-controller');
    const progressBarController = require('./ui_controllers/progress-bar-controller');

    tabEventsController.createTabEvents(
        document.getElementById('navbar'), [0], true);
    tabEventsController.createTabEvents(
        document.getElementById('settings-tab-content'));
    tabEventsController.createTabEvents(
        document.getElementById('library-tab-content'));

    progressBarController.initializeProgressBar();
    progressBarController.updateProgressBar(43);

})();