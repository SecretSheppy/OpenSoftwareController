(function () {

    'use strict';

    const INFO = 'info';
    const WARNING = 'warning';
    const ERROR = 'error';

    module.exports = exports = { INFO, WARNING, ERROR, spawnNotification };

    /**
     * Generates a random notification ID
     * @returns {string}
     */
    function generateNotificationId () {
        return Math.random().toString(36).substring(2);
    }

    /**
     * Switches the icon path based on the notification type
     * @param {string} type
     * @returns {string}
     */
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

    /**
     * Returns a function that closes a notification and removes an event
     * listener.
     * @param {string} notificationId
     * @returns {(function(): void)|*}
     */
    function notificationCloseEventHandler (notificationId) {
        return function () {
            let notificationElement = document.getElementById(notificationId);
            notificationElement.removeEventListener(
                'click',
                notificationCloseEventHandler);
            notificationElement.remove();
        }
    }

    /**
     * Spawns a notification in the notification tab
     * @param {string} title
     * @param {string} text
     * @param {string} type
     */
    function spawnNotificationInTab (title, text, type) {
        let notificationId = `tab-notification-${generateNotificationId()}`;

        let notification = document.createElement('div');
        notification.classList.add('notification');
        notification.setAttribute('id', notificationId);

        let notificationContentWrapper = document.createElement('div');
        notificationContentWrapper.classList
            .add('notification-content-wrapper');

        let notificationIconWrapper = document.createElement('div');
        notificationIconWrapper.classList.add('notification-icon-wrapper');

        let notificationIcon = document.createElement('img');
        notificationIcon.classList.add('icon');
        notificationIcon.setAttribute(
            'src',
            notificationIconSwitcher(type));
        notificationIcon.setAttribute(
            'alt',
            'Notification Icon');
        notificationIconWrapper.appendChild(notificationIcon);
        notificationContentWrapper.appendChild(notificationIconWrapper);

        let notificationContent = document.createElement('div');
        notificationContent.classList.add('notification-content');

        let notificationText = document.createElement('p');
        notificationText.classList.add('notification-text');
        notificationText.innerHTML
            = `<span class="notification-title">${title}:</span> ${text}`;
        notificationContent.appendChild(notificationText);
        notificationContentWrapper.appendChild(notificationContent);
        notification.appendChild(notificationContentWrapper);

        let notificationCloseButton = document.createElement('div');
        notificationCloseButton.classList.add('notification-close-button');

        let notificationCloseButtonIcon = document.createElement('img');
        notificationCloseButtonIcon.classList.add('icon');
        notificationCloseButtonIcon.setAttribute(
            'src',
            'graphics/icons/cross.png');
        notificationCloseButtonIcon.setAttribute(
            'alt',
            'Close Notification');
        notificationCloseButton.appendChild(notificationCloseButtonIcon);
        notificationCloseButton.addEventListener(
            'click',
            notificationCloseEventHandler(notificationId));
        notification.appendChild(notificationCloseButton);

        document.getElementById('notifications-tab-area')
            .appendChild(notification);
    }

    /**
     * Spawns a notification on the screen
     * @param {string} title
     * @param {string} text
     * @param {string} type
     */
    function spawnNotification (title, text, type) {
        spawnNotificationInTab(title, text, type);

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