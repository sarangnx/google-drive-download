<template>
    <v-col cols="12" ref="fullheight" class="sky">
        <div class="d-flex justify-center align-center fill-height flex-column flex-md-row">
            <div class="__columns d-flex justify-center align-center">
                <bifrost/>
            </div>
            <div class="__columns d-flex justify-center align-center flex-column">
                <div class="text-uppercase font-weight-black __display">
                    Download to Drive
                </div>
                <div class="subtitle-1">
                    <p class="__sub">
                        BIFROST downloads any link directly to your
                        Google Drive<sup><small>TM</small></sup>.
                    </p>
                </div>
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
.sky {
    background: #2541B2;
}
.__sub {
    color: white;
    font-family: monospace;
    font-size: 0.75em;
}
.__display {
    color: white;
    font-size: 3em;
}
</style>
