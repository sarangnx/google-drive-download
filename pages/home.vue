<template>
    <v-col cols="12" ref="fullheight">
        <div class="d-flex justify-center align-center fill-height">
            Home
        </div>
    </v-col>
</template>

<script>
import fullHeight from '@/mixins/fullHeight';

export default {
    name: 'home',
    mixins: [fullHeight],
}
</script>
