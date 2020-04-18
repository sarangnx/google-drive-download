<template>
    <v-app>
        <notifications/>
        <v-app-bar
            app
            elevate-on-scroll
            color="#2541B2"
        >
            <div class="font-weight-black white--text">
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
import Notifications from '@/components/Notifications/Notifications';

export default {
    name: 'default-layout',
    components: {
        Notifications,
    },
};
</script>
