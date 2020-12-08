<template>
    <transition name="slide">
        <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" id="recentPlay">
            <nav-header class="nav" title="最近播放"/>
            <music-list   :music-info="recentPlay" :is-show-loading-props="false"/>
        </div>
    </transition>
</template>

<script>
    import {getRecentPlay, getSongURL, getLyric} from "api";


    import {mapMutations, mapState} from 'vuex'
    import {dataLyric} from "common/dataLyric";
    import MusicList from "../../components/common/musicList/MusicList";
    import NavHeader from "../../components/common/NavHeader";

    export default {
        name: "RecentPlay",
        components: {NavHeader, MusicList},
        data() {
            return {}
        },
        computed: {
            ...mapState('musicDetail', ['recentPlay'])
        },
        methods: {}
    }
</script>

<style lang="less" scoped>



    .slide-leave-to {
        transform: translateX(100%);
    }

    .slide-leave-active {
        position: absolute;
        z-index: 300;
        transition: transform  .3s;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }

    .nav {
        margin: 0;
        width: 100%;
        background-color: #FF6699;
    }


    #recentPlay {
        padding-top: 44px;
        width: 100%;
        height: 100%;
        color: white;
        background-color: #F3F3F3;
    }
</style>
