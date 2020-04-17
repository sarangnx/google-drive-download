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
        ...mapActions([
            'notifications/remove',
        ]),
    },
};
</script>
