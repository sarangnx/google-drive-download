<template>
    <v-app>
        <v-app-bar
            app
            elevate-on-scroll
            color="white"
        >
        </v-app-bar>
        <v-content>
            <v-container class="pa-0" fluid>
                <nuxt/>
            </v-container>
        </v-content>
        <v-footer>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'default-layout'
};
</script>
