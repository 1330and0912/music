<template>
    <div class="music-list" :class="isScrollY? 'scroll':''">
        <div v-if="isShowLoadingProps" class="l">
            <loading :show-loading="isShowLoading"/>
        </div>
        <music-list-item :key="index" :music-info="item"   v-for="(item,index) in musicInfo"/>
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
            },
            isScrollY: {
                type: Boolean,
                default: true
            },
            isShowLoadingProps: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                isShowLoading: true
            }
        },
        watch: {
            musicInfo(newVal, oldVal) {
                if (newVal.length) {
                    this.isShowLoading = false
                }
            }
        },
        activated() {
            if (this.musicInfo.length == 0) {
                this.isShowLoading = true
            }
        },
    }
</script>

<style lang="less" scoped>
    .music-list {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .scroll {
        -webkit-overflow-scrolling:touch;
        overflow-y: scroll !important;
    }
</style>
