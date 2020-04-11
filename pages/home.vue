<template>
    <v-col cols="12" ref="fullheight" class="sky">
        <div class="d-flex justify-center align-center fill-height flex-column flex-md-row">
            <div class="__columns d-flex justify-center align-center">
                <bifrost/>
            </div>
            <div class="__columns">
            </div>
        </div>
    </v-col>
</template>

<script>
import fullHeight from '@/mixins/fullHeight';
import Bifrost from '@/components/bifrost';

export default {
    name: 'home',
    mixins: [fullHeight],
    components: {
        Bifrost,
    }
}
</script>

<style scoped lang="scss">
.__columns {
    height: 100%;
    width: 100%;
}
</style>
