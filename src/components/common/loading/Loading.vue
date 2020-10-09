<template>
    <div class="loading">
        <div>努力加载中...</div>

        <img src="~assets/img/loadingCOp.jpg" alt="asd">
    </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style lang="less" scoped>
    .loading {
        width: 300px;
        height: 200px;
        position: absolute;
        top: 20%;
        bottom: 50%;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
            width: 140px;
        }

    }
</style>
