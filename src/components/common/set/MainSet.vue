<template>
    <div id="mainSet" :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
        <div class="set-wrap">
            <top/>
            <music-serve/>
        </div>
        <bottom-control/>
    </div>
</template>

<script>
    import Top from "./childComponents/Top";
    import MusicServe from "./childComponents/MusicServe";
    import BottomControl from "./childComponents/BottomControl";

    export default {
        name: "MainSet",
        components: {BottomControl, MusicServe, Top},
        data() {
            return {}
        },
        props: {}
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 49px !important;
    }

    #mainSet {
        width: 100%;
        height: 100%;
        background-color: #F7F7F7;
        padding:  0px 10px ;
        overflow-y: scroll;
    }
    .set-wrap {
        padding-top: 10px;
        height: calc(100% - 49px);
        overflow-y: scroll;
    }
</style>
