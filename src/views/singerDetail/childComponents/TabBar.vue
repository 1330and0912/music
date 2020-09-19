<template>
    <div class="tab-bar">
        <van-tabs
                border
                lazy-render
                duration=".3"
                title-inactive-color="black" title-active-color="#000"
                background="#fff"  @click="tabClick"
                swipeable animated sticky v-model="active"
        >
            <van-tab title="简介">
                <introduction :id="id"/>
            </van-tab>
            <van-tab title="热门单曲">
                <hot-single :id="id"/>
            </van-tab>
            <van-tab title="专辑">
                <album :id="id"/>
            </van-tab>
            <van-tab title="MV">
                <m-v-play :id="id"/>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Introduction from "./Introduction";
    import HotSingle from "./HotSingle";
    import Album from "./Album";
    import MVPlay from "../../../components/common/mv/MVPlay";

    export default {
        name: "TabBar",
        components: {MVPlay, Album, HotSingle, Introduction},
        data() {
            return {
                active: 0,
            };
        },
        props: ['id'],
        methods: {
            tabClick(name, title) {
            }
        },
    }
</script>

<style lang="less" scoped>
    .tab-bar {
        height: 100%;
    }
</style>
