<template>
    <transition name="slide">
        <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" id="recentPlay">
            <content-list  title="最近播放">
                <music-list :is-scroll-y="false" :music-info="recentPlay" :is-show-loading-props="false"/>
            </content-list>
        </div>
    </transition>
</template>

<script>
    import {getRecentPlay, getSongURL, getLyric} from "api";


    import {mapMutations, mapState} from 'vuex'
    import {dataLyric} from "common/dataLyric";
    import MusicList from "../../components/common/musicList/MusicList";
    import NavHeader from "../../components/common/NavHeader";
    import ContentList from "../../components/common/ContentList";

    export default {
        name: "RecentPlay",
        components: {ContentList, NavHeader, MusicList},
        data() {
            return {
                bg: require('../../assets/img/profile/user.jpg'),
            }
        },
        computed: {
            ...mapState('musicDetail', ['recentPlay'])
        },
        methods: {

        }
    }
</script>

<style lang="less" scoped>


    .slide-leave-to {
        transform: translateX(100%);
    }

    .slide-leave-active {
        position: absolute;
        z-index: 300;
        transition: transform .3s;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }


    #recentPlay {
        width: 100%;
        height: 100%;
        color: white;
        background-color: #F3F3F3;
    }
</style>
