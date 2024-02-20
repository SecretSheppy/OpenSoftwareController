(function () {

    'use strict';

    const INFO = 'info';
    const WARNING = 'warning';
    const ERROR = 'error';

    module.exports = exports = { INFO, WARNING, ERROR, spawnNotification };

    function generateNotificationId () {
        return Math.random().toString(36).substring(2);
    }

    function notificationIconSwitcher (type) {
        switch (type) {
            case WARNING:
                return 'graphics/icons/warning.png';
            case ERROR:
                return 'graphics/icons/error.png';
            default:
                return 'graphics/icons/info.png';
        }
    }

    function notificationCloseEventHandler (notificationId) {
        return function () {
            let notificationElement = document.getElementById(notificationId);
            notificationElement.removeEventListener(
                'click',
                notificationCloseEventHandler);
            notificationElement.remove();
        }
    }

    function spawnNotification (title, text, type) {
        let notificationId = `notification-${generateNotificationId()}`;

        let notification = document.createElement('div');
        notification.classList.add('notification');
        notification.setAttribute('id', notificationId);

        let notificationTitleBar = document.createElement('div');
        notificationTitleBar.classList.add('notification-title-bar');

        let notificationTitle = document.createElement('div');
        notificationTitle.classList.add('notification-title');

        let notificationTitleIcon = document.createElement('img');
        notificationTitleIcon.classList.add('icon');
        notificationTitleIcon.setAttribute(
            'src',
            notificationIconSwitcher(type));
        notificationTitleIcon.setAttribute(
            'alt',
            'Notification Icon');
        notificationTitle.appendChild(notificationTitleIcon);

        let notificationTitleText = document.createElement('h3');
        notificationTitleText.innerText = title;
        notificationTitle.appendChild(notificationTitleText);

        notificationTitleBar.appendChild(notificationTitle);

        let notificationControls = document.createElement('div');
        notificationControls.classList.add('notification-controls');

        let notificationCloseButton = document.createElement('div');
        notificationCloseButton.classList.add('notification-button');
        notificationCloseButton.setAttribute(
            'id',
            `close-${notificationId}`);
        notificationCloseButton.addEventListener(
            'click',
            notificationCloseEventHandler(notificationId));

        let notificationCloseButtonIcon = document.createElement('img');
        notificationCloseButtonIcon.classList.add('icon');
        notificationCloseButtonIcon.setAttribute(
            'src',
            'graphics/icons/cross.png');
        notificationCloseButtonIcon.setAttribute(
            'alt',
            'Close Notification');
        notificationCloseButton.appendChild(notificationCloseButtonIcon);
        notificationControls.appendChild(notificationCloseButton);
        notificationTitleBar.appendChild(notificationControls);
        notification.appendChild(notificationTitleBar);

        let notificationContent = document.createElement('div');
        notificationContent.classList.add('notification-content');

        let notificationText = document.createElement('p');
        notificationText.innerText = text;
        notificationContent.appendChild(notificationText);
        notification.appendChild(notificationContent);

        document.getElementById('on-screen-notifications')
            .prepend(notification);
    }

})();