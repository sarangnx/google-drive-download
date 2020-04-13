<template>
    <v-app>
        <v-app-bar
            app
            elevate-on-scroll
            color="#2541B2"
        >
            <div class="font-weight-black grey--text text--lighten-1">
                BIFROST
            </div>
        </v-app-bar>
        <v-content>
            <v-container class="pa-0" fluid>
                <nuxt/>
            </v-container>
        </v-content>
        <v-footer dark padless>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: 'default-layout'
};
</script>
