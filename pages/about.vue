<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="10" md="8">
                <h1>About</h1>
                <p class="text-justify">
                    The website uses <a href="https://developers.google.com/drive">Google Drive APIs</a>
                    to upload files to your Google Drive<sup><small>TM</small></sup>.
                    What it essentially does is stream the file through the hosted
                    server to the Google Driver server, <a href="/">Bifrost</a> does that for you.
                    That is you don't need to download the file to your system and re-upload
                    it to your Drive. So in short, the file gets to your Drive without
                    using your network bandwidth.
                </p>

                <h3 class="grey--text">Is the file stored in Bifrost server?</h3>
                <p class="text-justify">
                    No, it is not stored in any servers. No persistent storage is used by
                    this website.
                </p>
                <p class="text-justify">
                    Even though it was mentioned earlier that the app downloads the file
                    and re-uploads it to your Google Drive, effectively it is not completely
                    downloaded to the app server at any instance. All it does is
                    <a href="https://en.wikipedia.org/wiki/Stream_(computing)">stream</a>
                    the file from source to destination through the app server.
                </p>

                <h3 class="grey--text">Can Bifrost access my Google Drive?</h3>
                <p class="text-justify">
                    Yes, the app can access your Google Drive with your authorization.
                    In order to upload the file to your Drive the app requires write
                    permission.
                    But you can at anytime revoke the permission. To remove the access you can
                    follow these steps:
                </p>
                <p>
                    <ol>
                        <li>
                            Head to <a href="https://myaccount.google.com/permissions" target="_blank">
                            Google Account Security</a> tab.
                        </li>
                        <li>
                            Look for Bifrost in <strong>Third-party apps with account access</strong>
                            section.
                        </li>
                        <li>
                            Click on it an then click on <v-btn color="primary">Remove Access</v-btn> Button.
                        </li>
                    </ol>
                </p>
                <p class="text-justify">
                    The above steps are not necessary, google takes care of it seamlessly.
                    If you are paranoid enough, you can resort to the above method for
                    your peace of mind.
                    If at anytime you feel like using the service again, just head back to the
                    website.
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
