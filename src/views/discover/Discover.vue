<template>
    <transition name="fade">
        <div id="discover" :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
            <div class="scroll">
                <netease-mv-swiper/>
                <dragon-bar/>
                <recommend-play-list/>
                <recommend-song/>
                <recommend-m-v/>
                <recommend-album/>
            </div>
        </div>
    </transition>

</template>

<script>
    import Swipe from "../profile/childComponents/Swipe";
    import DragonBar from "./childComponents/DragonBar";
    import RecommendPlayList from "./childComponents/RecommendPlayList";
    import RecommendSong from "./childComponents/RecommendSong";
    import RecommendMV from "./childComponents/RecommendMV";
    import NeteaseMvSwiper from "./childComponents/NeteaseMvSwiper";
    import RecommendAlbum from "./childComponents/RecommendAlbum";

    export default {
        name: "Discover",
        components: {RecommendAlbum, NeteaseMvSwiper, RecommendMV, RecommendSong, RecommendPlayList, DragonBar, Swipe},

    }
</script>

<style lang="less" scoped>

    .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-leave-to {
        position: fixed;
        opacity: 0;
        z-index: 99;
        width: 100%;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }

    #discover {
        padding: 0 15px;
        width: 100%;
        height: 100%;
        padding-top: 49px;
        background-color: #F8F8F8;
    }

    .scroll {
        padding-bottom: 11px;
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
</style>
