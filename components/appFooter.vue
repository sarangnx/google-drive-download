<template>
    <div class="d-flex flex-column flex-grow-1">
        <div>
            <v-col>
                Top
            </v-col>
        </div>
        <div class="bottom__strip d-flex flex-row justify-center justify-md-end align-center pa-2">
            <span>made with</span>
            <v-icon class="ml-1 mr-1" >mdi-keyboard</v-icon>
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
