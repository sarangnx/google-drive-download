<template>
    <div class="profile">
        <v-menu bottom left offset-y nudge-bottom="10" content-class="no-shadow">
            <template v-slot:activator="{ on }">
                <v-avatar class="photo __pointer" v-on="on">
                    <v-img :src="photo" />
                </v-avatar>
            </template>

            <div class="d-flex flex-column">
                <v-btn small color="secondary" @click="openDownloads" class="mb-2">
                    Downloads
                    <v-icon right>mdi-download</v-icon>
                </v-btn>
                <v-btn small color="secondary" @click="logout" class="mb-2">
                    Logout
                    <v-icon right>mdi-logout</v-icon>
                </v-btn>
            </div>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: 'profile',
    props: {
        name: {
            type: String,
            default: ''
        },
        photo: {
            type: String,
            default: '/google-logo.svg'
        }
    },
    methods: {
        logout() {
            this.$axios({
                method: 'post',
                url: '/auth/logout',
            }).then((res) => {
                if(res.data && res.data.message){
                    this.$success(res.data.message);
                    this.$emit('logout');
                }
            }).catch((err) => {
                this.$error('something went wrong!');
            });
        },
        openDownloads() {
            this.$emit('open');
        }
    }
};
</script>

<style>
.profile {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 10px;
    right: 10px;
}
.photo {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
}
.no-shadow {
    box-shadow: none;
}
</style>
