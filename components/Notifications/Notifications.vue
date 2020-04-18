<template>
    <div class="notifications">
        <slide-y-up-transition :duration="transitionDuration" group mode="out-in">
            <notification
                v-for="notification in notifications"
                v-bind="notification"
                :clickHandler="notification.onClick"
                :key="notification.timestamp.getTime()"
                @close="remove(notification.timestamp)"
            ></notification>
        </slide-y-up-transition>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { SlideYUpTransition } from 'vue2-transitions';
import Notification from './Notification.vue';

export default {
    components: {
        SlideYUpTransition,
        Notification
    },
    props: {
        transitionDuration: {
            type: Number,
            default: 200
        },
    },
    computed: {
        ...mapGetters({
            notifications: 'notifications/list',
        }),
    },
    methods: {
        ...mapActions({
            remove: 'notifications/remove',
        }),
    },
};
</script>

<style>
.notifications {
    position: fixed;
    z-index: 999;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    padding: 10px;
    pointer-events: none;
}
</style>
