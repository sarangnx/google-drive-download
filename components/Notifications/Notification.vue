<template>
    <v-alert :color="type" @click.native.stop="tryClose">
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
            <v-btn @click.prevent.stop="close" icon v-if="showClose">
                <v-icon>mdi-close-box</v-icon>
            </v-btn>
        </template>
    </v-alert>
</template>
<script>
export default {
    name: 'notification',
    props: {
        message: String,
        title: String,
        icon: String,
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
    data() {
        return {
            elmHeight: 0
        };
    },
    computed: {
        hasIcon() {
            return this.icon && this.icon.length > 0;
        }
        // customPosition() {
        //     let initialMargin = 20;
        //     let alertHeight = this.elmHeight + 10;
        //     let sameAlertsCount = this.$notifications.state.filter(alert => {
        //         return (
        //             alert.horizontalAlign === this.horizontalAlign &&
        //             alert.verticalAlign === this.verticalAlign &&
        //             alert.timestamp <= this.timestamp
        //         );
        //     }).length;
        //     if (this.$notifications.settings.overlap) {
        //         sameAlertsCount = 1;
        //     }
        //     let pixels = (sameAlertsCount - 1) * alertHeight + initialMargin;
        //     let styles = {};
        //     if (this.verticalAlign === 'top') {
        //         styles.top = `${pixels}px`;
        //     } else {
        //         styles.bottom = `${pixels}px`;
        //     }
        //     return styles;
        // }
    },
    methods: {
        close() {
            this.$emit('close', this.timestamp);
        },
        tryClose(evt) {
            console.log('fuck.......')
            return;
            if (this.clickHandler) {
                this.clickHandler(evt, this);
            }
            if (this.closeOnClick && !this.showClose) {
                this.close();
            }
        }
    }
    // mounted() {
    //     this.elmHeight = this.$el.clientHeight;
    //     if (this.timeout) {
    //         setTimeout(this.close, this.timeout);
    //     }
    // }
};
</script>
<style lang="scss">
.notifications .alert {
    position: fixed;
    z-index: 10000;
    &[data-notify='container'] {
        max-width: 500px;
    }
    &.center {
        margin: 0 auto;
    }
    &.left {
        left: 20px;
    }
    &.right {
        right: 20px;
    }
}
</style>
