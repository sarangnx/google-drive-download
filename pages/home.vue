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
                        <v-tooltip top color="white">
                            <template v-slot:activator="{ on }">
                                <span v-on="on" class="__pointer">Bifröst</span>
                            </template>
                            <div class="d-flex flex-column black--text">
                                <span>In Norse mythology,</span>
                                <span>Bifröst is a burning rainbow bridge</span>
                                <span>that reaches between Midgard and</span>
                                <span>Asgard, the realm of the gods.</span>
                            </div>
                        </v-tooltip>
                        downloads any link directly to your
                        Google Drive<sup><small>TM</small></sup>.
                    </p>                    
                </div>
                <v-btn color="#0090C1" to="#drive">
                    <span class="white--text">USE APP</span>
                    <v-icon right color="white">mdi-arrow-down</v-icon>
                </v-btn>
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
    font-size: calc( 6px + 0.75vw);
}
.__display {
    color: white;
    font-size: calc( 20px + 2.5vw);
}
</style>
