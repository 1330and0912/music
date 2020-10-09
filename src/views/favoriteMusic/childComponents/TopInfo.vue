<template>
    <div class="top-info">
        <img src="~assets/img/likemusic.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: "TopInfo"
    }
</script>

<style lang="less" scoped>
    .top-info {
        background-color: rgba(0, 0, 0, .3);
        height: 35%;
        width: 100%;
        position: absolute;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(1,1, 1, .4);
        }
        img {
            width: 100%;
        }
    }
</style>
