<template>
    <div :style="{position:position}" v-if="showLoading" class="loading">
        <div class="wrap">
            <div class="box1"></div>
            <div class="box2"></div>
            <div class="box3"></div>
            <div class="box4"></div>
        </div>
        <div>努力加载中...</div>
    </div>
</template>

<script>
    export default {
        name: "Loading",
        props: ['showLoading', 'position'],
    }
</script>

<style lang="less" scoped>
    .loading {
        z-index: 100;
        width: 300px;
        height: 200px;
        position: absolute;
        top: 20%;
        left: 50%;
        right: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 140px;
        }

        div {
            margin-left: 5px;
            font-size: 12px;
            color: #000;
        }
    }

    .wrap {
        padding-top: 10px;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: space-around;
    }

    .wrap div {
        animation: move 1.5s infinite linear ;
        background-color: #FF3A3A;
        height: 20px;
        width: 3px;
    }

    .wrap .box1 {
        animation-delay: .15s;
    }

    .wrap .box2 {
        animation-delay: .25s;
    }

    .wrap .box3 {
        animation-delay: .15s;
    }

    .wrap .box4 {
        animation-delay: .25s;
    }

    @keyframes move {
        0%, 20%, 100% {
            height: 10px;
        }

        10%, 30%, 50% {
            height: 20px;
            transform: scale(1.2);
        }

        40%, 60%, 80% {
            background-color: blueviolet;
            height: 20px;
        }
        70%, 90% {
            background-color: #DD4A68;
            height: 25px;
        }

    }
</style>
