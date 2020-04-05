<template>
    <v-col>
        <div class="d-flex justify-center align-center fill-height">
            <v-btn
                v-show="!authorized"
                href="/auth/generate"
                target="_blank"
            >
                Sign In With Google
            </v-btn>
        </div>
    </v-col>
</template>

<script>
export default {
    name: 'app',
    data: () => ({
        authorized: false,
    }),
    methods:{
        isAuthorized() {
            const { auth } = this.$route.query;

            this.authorized = auth === 'true' ? true : false;
        }
    },
    mounted() {
        this.isAuthorized();
    }
}
</script>