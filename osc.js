(function () {

    'use strict';

    const tabEventsController = require('./modules/tab-events-controller');

    tabEventsController.createTabEvents(
        document.getElementById('navbar'), [0], true);
    tabEventsController.createTabEvents(
        document.getElementById('settings-tab-content'));
    tabEventsController.createTabEvents(
        document.getElementById('library-tab-content'));

})();