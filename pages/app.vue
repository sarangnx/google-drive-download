<template>
    <v-col cols="12" ref="fullheight" class="drive">
        <cloud-bg/>
        <div class="d-flex justify-center align-center fill-height">
            <v-btn
                v-show="!authorized"
                href="/auth/generate"
                large
                color="#fff"
            >
                <v-img src="/google-logo.svg" class="mr-4"/>
                <span>Sign In With Google</span>
            </v-btn>
            <v-container
                v-show="authorized"

            >
                <v-row class="d-flex justify-center align-center flex-column">
                    <v-col cols="12" md="6">
                        <v-text-field
                            solo
                            clearable
                            v-model="link"
                            hint="http://example.com/movie.mp4"
                        >
                            <template slot="label">
                                Download URL
                            </template>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" class="d-flex justify-center align-center flex-column">
                        <v-btn
                            @click.prevent="download"
                            color="#fff"
                            large
                        >
                            <v-img src="/google-drive64.png" width="24px" height="24px" contain class="mr-4"/>
                            <span>Download to Drive</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <profile v-if="profile" v-bind="profile" @logout="logout"/>
    </v-col>
</template>

<script>
import io from 'socket.io-client';
import fullHeight from '@/mixins/fullHeight';
import CloudBg from '@/components/cloudbg';
import Profile from '@/components/profile';

export default {
    mixins: [fullHeight],
    components: {
        CloudBg,
        Profile
    },
    name: 'app',
    data: () => ({
        authorized: false,
        link: null,
        id: null,
        socket: null,
        profile: null
    }),
    methods:{
        download() {
            const url = this.link;
            this.id = Date.now();
            this.socket.emit('join', this.id);

            this.$axios({
                method: 'post',
                url: '/drive/download',
                data: {
                    url,
                    id: this.id,
                },
            }).then((res) => {
                if(res.data && res.data.message){
                    this.$success(res.data.message);
                }
            }).catch((err) => {
                if( err.response && err.response.data && err.response.data.error ) {
                    const error = err.response.data.error;
                    this.$error(error.message);
                    if( error.type === 'SESSION_EXPIRED' || err.response.status === 401 ) {
                        this.authorized = false;
                    }
                }
            });
        },
        getProfile() {
            this.$axios({
                method: 'get',
                url: '/user/profile',
            }).then((res) => {
                if(res.data && res.data.profile){
                    this.profile = Object.assign(res.data.profile);
                }
            }).catch((err) => {
                if( err.response && err.response.data && err.response.data.error ) {
                    const error = err.response.data.error;
                    if( error.type === 'SESSION_EXPIRED' || err.response.status === 401 ) {
                        this.authorized = false;
                    }
                }
            });
        },
        logout() {
            this.authorized = false;
            this.profile = null;
        },
        parseCookie() {
            let cookie = document.cookie.split(';');
            cookie = cookie.map((item) => {
                return item.split('=');
            });
            cookie = cookie.reduce((object,item) => {
                object[item[0]] = item[1];
                return object;
            }, {});

            if(cookie.auth && cookie.auth === 'true') {
                this.authorized = true;
            }
        }
    },
    mounted() {
        this.parseCookie();
        // Get profile if authorized.
        if(this.authorized) {
            this.getProfile();
        }

        // create a socket connection to server.
        this.socket = io();
        this.socket.on('upload:progress', (data) => {
            console.log(data);
        });
    }
}
</script>

<style lang="scss">
.drive {
    position: relative;
}
</style>
