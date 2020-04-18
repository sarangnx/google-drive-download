<template>
    <div class="d-flex flex-column flex-grow-1">
        <div class="pa-2 d-flex flex-column flex-md-row justify-space-around align-center">
            <div class="col-8 col-md-3">
                <span class="font-weight-black white--text">BIFROST</span>
                <div
                    class="__font10 __mono"
                >Bifröst uses Google Drive APIs to download files to your Drive storage.</div>
            </div>
            <div class="col-8 col-md-3">
                <div class="font-weight-bold white--text">LINKS</div>
                <div class="__mono __font12">
                    <div>
                        <v-btn
                            x-small
                            text
                            :ripple="false"
                            class="pa-0 text-capitalize"
                            to="/about"
                        >about</v-btn>
                    </div>
                    <div>
                        <v-btn
                            x-small
                            text
                            :ripple="false"
                            class="pa-0 text-capitalize"
                            href="https://github.com/sarangnx/google-drive-download"
                            target="_blank"
                        >
                            source code
                            <v-icon right small>mdi-source-branch</v-icon>
                        </v-btn>
                    </div>
                    <div>
                        <v-btn
                            x-small
                            text
                            :ripple="false"
                            class="pa-0 text-capitalize"
                            to="/help"
                        >
                            help
                        </v-btn>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom__strip d-flex flex-row justify-center justify-md-end align-center pa-2">
            <span>made with</span>
            <v-icon class="ml-1 mr-1">mdi-keyboard</v-icon>
            <span>by</span>
            <v-btn icon :ripple="false" href="https://github.com/sarangnx" target="_blank">
                <v-icon>mdi-github</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<style scoped>
.bottom__strip {
    background: #151515;
    font-size: 12px;
    font-family: monospace;
}
</style>
