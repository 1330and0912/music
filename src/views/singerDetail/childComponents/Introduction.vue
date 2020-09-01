<template>
    <div v-if="!this.$store.state.isShowLoading" :class="this.$store.state.isShowPlayBar?'bottom-padding':''" class="introduction">
        <img class="singer-img" :src="bg" alt="">
    </div>
</template>

<script>
    import {getAlbum} from "api";

    export default {
        name: "Introduction",
        props: ['id'],
        data() {
            return {
                bg: ''
            }
        },
        watch: {
            id() {
                this.bg = ''
                this.getBg()
            }
        },
        methods: {
            async getBg() {
                this.bg = (await getAlbum(this.id, 1)).artist.picUrl
            }
        },
        async created() {
            this.getBg()
        }
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 49px !important;
    }

    .introduction {
        height: 100%;
        overflow-y: scroll;

        .singer-img {
            width: 100%;
        }
    }
</style>
