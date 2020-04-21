<template>
    <v-app>
        <notifications/>
        <v-app-bar
            app
            elevate-on-scroll
            color="#2541B2"
        >
            <div class="font-weight-black white--text __pointer" @click="$router.push('/')">
                BIFROST
            </div>
        </v-app-bar>
        <v-content>
            <v-container class="pa-0" fluid>
                <nuxt/>
            </v-container>
        </v-content>
        <v-footer dark padless>
            <app-footer/>
        </v-footer>
    </v-app>
</template>

<script>
import Notifications from '@/components/Notifications/Notifications';
import AppFooter from '@/components/appFooter';

export default {
    name: 'default-layout',
    components: {
        Notifications,
        AppFooter
    },
};
</script>
