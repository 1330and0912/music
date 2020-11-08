<template>
    <div id="mainSet">
        <top/>
        <music-serve/>
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
    #mainSet {
        width: 100%;
        height: 100%;
        background-color: #F7F7F7;
        padding: 20px 10px;
        overflow-y: scroll;
        padding-bottom: 69px;
    }
</style>
