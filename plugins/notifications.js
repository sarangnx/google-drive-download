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

    Vue.prototype.$success = function(message) {
        Vue.prototype.$notify({
            message,
            type: 'success',
            icon: 'mdi-check-circle'
        });
    };

    Vue.prototype.$error = function(message) {
        Vue.prototype.$notify({
            message,
            type: 'error',
            icon: 'mdi-close-circle'
        });
    };

    Vue.prototype.$warn = function(message) {
        Vue.prototype.$notify({
            message,
            type: 'warning',
            icon: 'mdi-alert'
        });
    };

    Vue.prototype.$info = function(message) {
        Vue.prototype.$notify({
            message,
            type: 'info',
            icon: 'mdi-information'
        });
    };
}
