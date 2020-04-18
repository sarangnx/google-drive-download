
export const state = () => ({
    list: [], // notifications will be added here
    settings: {
        verticalAlign: 'top',
        horizontalAlign: 'right',
        type: 'info',
        timeout: 5000,
        closeOnClick: true,
        showClose: false
    },
});

export const mutations = {
    // set default options
    setOptions(state, options) {
        state.settings = Object.assign(state.settings, options);
    },
    // set Height
    setHeight(state, { timestamp, height }) {
        const index = state.list.findIndex(n => n.timestamp === timestamp);
        if (index !== -1) {
            /**
             * you have to go to great lengths to ensure reactivity.
             * this could've been done in a single step, but vue does
             * not react to these changes, and the notifications
             * wouldn't be working as expected.
             */
            const newObject = Object.assign({}, state.list[index], { height });
            state.list.splice(index, 1, newObject);
        }
    },
    // remove notification
    remove(state, timestamp) {
        const index = state.list.findIndex(n => n.timestamp === timestamp);
        if (index !== -1) {
            state.list.splice(index, 1);
        }
    },
    // add new notifications to queue
    add(state, notification) {
        if (
            typeof notification === 'string' ||
            notification instanceof String
        ) {
            notification = { message: notification };
        }
        notification.timestamp = new Date();
        notification.timestamp.setMilliseconds(
            notification.timestamp.getMilliseconds() + state.list.length
        );
        notification = Object.assign({}, state.settings, notification);
        state.list.push(notification);
    }
};

export const actions = {
    /**
     * This method/action is the one that is used
     * by components to add notifications to queue.
     */
    notify({ commit }, notification) {
        if (Array.isArray(notification)) {
            notification.forEach(notificationInstance => {
                commit('add', notificationInstance);
            });
        } else {
            commit('add', notification);
        }
    },

    /**
     * Action to call for removing a notification.
     * As a rule of thumb, call mutations through
     * actions only and not directly.
     */
    remove({ commit }, timestamp) {
        commit('remove', timestamp);
    },

    // setHeight action thats calls setHeight mutation
    setHeight({ commit }, { timestamp, height }) {
        commit('setHeight', { timestamp, height });
    }
};

export const getters = {
    // get notifications
    list(state) {
        return state.list;
    }
}
