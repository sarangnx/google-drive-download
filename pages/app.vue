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
            <v-container
                v-show="authorized"

            >
                <v-row class="d-flex justify-center align-center flex-column">
                    <v-col cols="12" md="6">
                        <v-text-field
                            solo
                            clearable
                            v-model="link"
                            label="download link"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3" class="d-flex justify-center align-center flex-column">
                        <v-btn
                            @click="download"
                        >
                            Download to Drive
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-col>
</template>

<script>
import io from 'socket.io-client';

export default {
    name: 'app',
    data: () => ({
        authorized: false,
        link: null,
        id: null,
        socket: null,
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
            }).catch((err) => {
                console.log(err);
            });
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

        // create a socket connection to server.
        this.socket = io();
        this.socket.on('upload:progress', (data) => {
            console.log(data);
        });
    }
}
</script>
