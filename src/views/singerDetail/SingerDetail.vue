<template>
    <div  class="singer-detail">
        <fixed-nav/>
        <tab-bar :id="id"/>
    </div>
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
                musicInfo:[],
                bg:''
            }
        },


    }
</script>
<!--:style="{backgroundImage:`url(${bg})`}"-->
<style lang="less" scoped>
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
