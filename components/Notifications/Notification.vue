<template>
    <v-alert :color="type" @click.native.stop="tryClose" class="notification"
        :class="[horizontalAlign]"
        :style="customPosition"
        max-width="500"
    >
        <template v-slot:prepend>
            <template v-if="icon">
                <v-icon left>{{ icon }}</v-icon>
            </template>
        </template>

        <template v-slot:default>
            <div class="white--text">
                <span v-if="title" class="font-weight-black d-block">{{ title }}</span>
                <span v-if="message" v-html="message"></span>
            </div>
        </template>

        <template v-slot:close>
            <v-btn @click.prevent.stop="close" icon v-if="showClose" class="ml-2">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </template>
    </v-alert>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'notification',
    props: {
        message: String,
        title: String,
        icon: String,
        height: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: 'info',
            validator: value => {
                let acceptedValues = [
                    'info',
                    'primary',
                    'secondary',
                    'error',
                    'warning',
                    'success'
                ];
                return acceptedValues.indexOf(value) !== -1;
            }
        },
        timeout: {
            type: Number,
            default: 5000,
            validator: value => {
                return value >= 0;
            }
        },
        timestamp: {
            type: Date,
            default: () => new Date()
        },
        showClose: {
            type: Boolean,
            default: true
        },
        closeOnClick: {
            type: Boolean,
            default: true
        },
        clickHandler: Function,
        verticalAlign: {
            type: String,
            default: 'top',
            validator: value => {
                let acceptedValues = ['top', 'bottom'];
                return acceptedValues.indexOf(value) !== -1;
            }
        },
        horizontalAlign: {
            type: String,
            default: 'right',
            validator: value => {
                let acceptedValues = ['left', 'center', 'right'];
                return acceptedValues.indexOf(value) !== -1;
            }
        },
    },
    computed: {
        ...mapGetters({
            notifications: 'notifications/list',
        }),
        customPosition() {
            const initialMargin = 20;

            // get alerts of the same alignment type and timestamp <= this
            const sameAlerts = this.notifications.filter(alert => {
                return (
                    alert.horizontalAlign === this.horizontalAlign &&
                    alert.verticalAlign === this.verticalAlign &&
                    alert.timestamp <= this.timestamp
                );
            });

            // calculate total height of those same alerts for offsetting this
            const totalHeight = sameAlerts.reduce((total, alert) => {
                if(alert.timestamp !== this.timestamp) {
                    total = total + ( alert.height ? alert.height : 0 ) + 10;
                }
                return total;
            }, 0);

            // find offset
            const pixels = totalHeight + initialMargin;

            let styles = {};
            if (this.verticalAlign === 'top') {
                styles.top = `${pixels}px`;
            } else {
                styles.bottom = `${pixels}px`;
            }
            return styles;
        }
    },
    methods: {
        ...mapActions({
            setHeight: 'notifications/setHeight',
        }),
        close() {
            this.$emit('close', this.timestamp);
        },
        tryClose(evt) {
            if (this.clickHandler) {
                this.clickHandler(evt, this);
            }
            if (this.closeOnClick && !this.showClose) {
                this.close();
            }
        }
    },
    mounted() {
        const bounds = this.$el.getBoundingClientRect();
        this.setHeight({ timestamp: this.timestamp, height: bounds.height });

        if (this.timeout) {
            setTimeout(this.close, this.timeout);
        }
    }
};
</script>

<style lang="scss">
.notification {
    position: absolute;
    &.left {
        left: 10px;
    }
    &.right {
        right: 10px;
    }
}
</style>
