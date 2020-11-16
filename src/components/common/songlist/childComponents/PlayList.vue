<template>
    <div class="play-list"   :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
        <music-list :is-scroll-y="isScrollY" :music-info="playList"/>
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

    .bottom-padding {
        padding-bottom: 49px !important;
    }
</style>
