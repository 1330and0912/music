<template>
    <div class="play-list"   :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
        <div class="h">
            <i class="iconfont icon-bofang1"></i>
            <div class="text">播放全部(共{{(playList.length)}}首)</div>
        </div>
        <music-list :is-show-loading-props="false" :is-scroll-y="isScrollY" :music-info="playList"/>
    </div>
</template>

<script>
    import MusicList from "../../musicList/MusicList";

    export default {
        name: "PlayList",
        components: {MusicList},
        props: {
            playList: {
                type: Array,
                default: () => []
            },
            isScrollY: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="less" scoped>
    .play-list {
        background-color: white;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

    }
    .h{
        padding: 15px 20px 5px;
        display: flex;
        align-items: center;
        i{
            font-size: 22px;
            margin-right: 5px;
        }
        .text{
            font-size: 14px;
            color: rgba(0,0,0,.5);
        }
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }
</style>
