/**
 * `fill-height` css class works relative to parent height.
 * There are times when you cannot specify height of parent,
 * or give `fill-height` class to the parent, in that cases
 * import this mixin and give a ref="fullheight" attribute
 * to the desired element.
 */

export default {
    methods: {
        computeHeight() {
            const el = this.$refs.fullheight;
            const { top, bottom } = this.$vuetify.application;
            const height = `calc(100vh - ${top + bottom}px)`;
            el.style.height = height;
        }
    },
    mounted() {
        this.computeHeight();
    }
};
