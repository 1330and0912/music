<template>
    <div class="tab-bar">
        <van-tabs
                lazy-render
                duration=".3"
                title-inactive-color="black" title-active-color="#fff"
                background="#666666
" @click="tabClick"
                swipeable animated sticky v-model="active">
            <van-tab title="简介">
                <introduction :id="id"/>
            </van-tab>
            <van-tab title="热门单曲">
                <hot-single :id="id"/>
            </van-tab>
            <van-tab title="专辑">
                <album :id="id"/>
            </van-tab>
            <van-tab title="视屏">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import Introduction from "./Introduction";
    import HotSingle from "./HotSingle";
    import Album from "./Album";

    export default {
        name: "TabBar",
        components: {Album, HotSingle, Introduction},
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
