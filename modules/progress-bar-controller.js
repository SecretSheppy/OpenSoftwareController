(function () {

    'use strict';

    module.exports = exports = { initializeProgressBar, updateProgressBar };

    function initializeProgressBar () {
        let canvas = document.getElementById('downloads-progress-bar');
        let context = canvas.getContext('2d');

        context.beginPath();
        context.lineWidth = 30;
        context.strokeStyle = '#252525';
        context.arc(150, 150, 115, 0, 2 * Math.PI);
        context.stroke();
    }

    function updateProgressBar (progressPercentage) {
        let canvas = document.getElementById('downloads-progress-bar');
        let context = canvas.getContext('2d');
        let startAngle = 1.5 * Math.PI;
        let endAngle = ((progressPercentage / 100) * 2 * Math.PI) + startAngle;

        context.beginPath();
        context.lineWidth = 30;
        context.strokeStyle = '#47a884';
        context.arc(150, 150, 115, startAngle, endAngle);
        context.stroke();

        document.getElementById('downloads-progress-bar-progress')
            .innerText = progressPercentage + '%';
    }

})();