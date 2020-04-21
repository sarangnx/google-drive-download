<template>
    <v-bottom-sheet :value="open" persistent hide-overlay inset scrollable>
        <v-card>
            <v-card-title class="d-flex justify-space-between">
                <span>Downloads</span>
                <v-btn icon @click="close"><v-icon>mdi-close</v-icon></v-btn>
            </v-card-title>
            <v-card-text style="max-height:500px" class="__scrollbar">
                <template v-if="!count">
                    There is nothing to see here.
                </template>
                <template v-else>
                    <div v-for="item in downloads" :key="item.id">
                        <div class="d-flex justify-space-between">
                            <span style="max-width:50%" class="text-truncate">{{ item.filename }}</span>
                        </div>
                        <div class="mb-5">
                            <v-progress-linear
                                height="20px"
                                rounded
                                :value="item.progress"
                                color="#2841b2"
                            >
                                <span>
                                    {{ parseBytes(item.bytesRead) }} / {{ parseBytes(item.totalBytes) }}
                                </span>
                            </v-progress-linear>
                        </div>
                    </div>
                </template>
            </v-card-text>
        </v-card>
    </v-bottom-sheet>
</template>

<script>
export default {
    name: 'downloads',
    props: {
        open: {
            type: Boolean,
            default: true
        },
        downloads: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        count() {
            return Object.keys(this.downloads).length;
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        parseBytes(bytes = 0) {
            bytes = Number(bytes);
            const KB = bytes / 1024;
            const MB = KB / 1024;
            const GB = MB / 1024;

            let parsed = `${parseFloat(bytes.toFixed(2))} B`;
            if (GB >= 1) {
                parsed = `${parseFloat(GB.toFixed(2))} GB`;
            } else if (MB >=1) {
                parsed = `${parseFloat(MB.toFixed(2))} MB`;
            } else if (KB >=1) {
                parsed = `${parseFloat(KB.toFixed(2))} KB`;
            }

            return parsed;
        }
    }
}
</script>
