<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="10" md="8">
                <h1>About</h1>
                <p class="text-justify">
                    The website uses <a href="https://developers.google.com/drive">Google Drive APIs</a>
                    to upload files to your Google Drive<sup><small>TM</small></sup>.
                    What it essentially does is stream the file through the hosted
                    server to the Google Driver server.
                    That is you don't need to download the file to your system and re-upload
                    it to your Drive. So in short, the file gets to your Drive without 
                    using your network bandwidth.
                </p>
                <p class="text-justify">
                    The project is open sourced and the code is available in
                    <a href="https://github.com/sarangnx/google-drive-download">
                        this github repository
                    </a>.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>
