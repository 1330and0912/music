<template>
    <transition name="slide-down">
        <div class="singer-detail">
            <fixed-nav/>
            <tab-bar :id="id"/>
        </div>
    </transition>
</template>

<script>
    import FixedNav from "./childComponents/FixedNav";
    import TabBar from "./childComponents/TabBar";

    export default {
        name: "SingerDetail",
        components: {TabBar, FixedNav},
        props: ['id'],
        data() {
            return {
                musicInfo: [],
                bg: ''
            }
        },


    }
</script>

<style lang="less" scoped>
    .slide-down-leave-to {
        opacity: 0;

        transform: scale(0.1);
    }

    .slide-down-leave-active {
        position: fixed !important;
        z-index: 9999;
        transition: all .5s !important;
    }

    .singer-detail {
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        /*&::before {*/
        /*    content: '';*/
        /*    position: absolute;*/
        /*    width: 100%;*/
        /*    height: 100%;*/
        /*    background-color: rgba(0, 0, 0, .7);*/
        /*}*/
        background-color: white;
    }

</style>
