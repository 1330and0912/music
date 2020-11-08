<template>
    <div class="music-list">
        <loading :show-loading="isShowLoading"/>
        <music-list-item :key="item.id" :music-info="item" id="item.id" v-for="item in musicInfo"/>
    </div>
</template>

<script>
    import MusicListItem from "./MusicListItem";
    import {mapState} from 'vuex'
    import Loading from "../loading/Loading";

    export default {
        name: "MusicList",
        components: {Loading, MusicListItem},
        props: {
            musicInfo: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                isShowLoading: true
            }
        },
        watch: {
            musicInfo(newVal) {
                if (newVal.length) {
                    this.isShowLoading = false
                }
            }
        },
        activated() {
            if (this.musicInfo.length == 0) {
                this.isShowLoading = true
            }
        }
    }
</script>

<style lang="less" scoped>
    .music-list {
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>
