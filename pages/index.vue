<template>
    <v-row class="ma-0 fill-height">
        <home id="home"/>
        <app id="drive"/>
    </v-row>
</template>

<script>
import App from './app';
import Home from './home';

export default {
    components: {
        App,
        Home,
    },
};
</script>
