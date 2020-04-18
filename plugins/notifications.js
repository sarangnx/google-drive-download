/**
 * Add global methods to add notifications.
 * notify, success, error, warn, info, methods are
 * added to Vue prototype.
 */
import Vue from 'vue';

export default function({ store }) {
    Vue.prototype.$notify = function(notification) {
        store.dispatch('notifications/notify', notification);
    };

    Vue.prototype.$success = function(notification) {
        if (
            typeof notification === 'string' ||
            notification instanceof String
        ) {
            notification = { message: notification };
        }

        notification = Object.assign(notification, {
            type: 'success',
            icon: 'mdi-check-circle'
        });
        Vue.prototype.$notify(notification);
    };

    Vue.prototype.$error = function(notification) {
        if (
            typeof notification === 'string' ||
            notification instanceof String
        ) {
            notification = { message: notification };
        }

        notification = Object.assign(notification, {
            type: 'error',
            icon: 'mdi-close-circle'
        });
        Vue.prototype.$notify(notification);
    };

    Vue.prototype.$warn = function(notification) {
        if (
            typeof notification === 'string' ||
            notification instanceof String
        ) {
            notification = { message: notification };
        }

        notification = Object.assign(notification, {
            type: 'warning',
            icon: 'mdi-alert'
        });
        Vue.prototype.$notify(notification);
    };

    Vue.prototype.$info = function(notification) {
        if (
            typeof notification === 'string' ||
            notification instanceof String
        ) {
            notification = { message: notification };
        }

        notification = Object.assign(notification, {
            type: 'info',
            icon: 'mdi-information'
        });
        Vue.prototype.$notify(notification);
    };
}
