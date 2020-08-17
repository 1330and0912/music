<template>
    <div class="loading">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
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
        top: 30%;
        bottom: 50%;
        left: 50%;
        right: 50%;
        color: #FF3A3A;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;

        .bar {
            position: relative;
            margin: 0 10px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: skyblue;
            animation: move .3s infinite linear;
            animation-direction: alternate-reverse;

            &:nth-child(1) {
                animation-delay: .1s;
                background-color: rgba(255, 110, 110, .4);
            }

            &:nth-child(2) {
                background-color: rgba(111, 220, 0, .6);
            }

            &:nth-child(3) {
                background-color: rgba(111, 20, 110, .4);
                animation-delay: .3s;
            }

            &:nth-child(4) {
                background-color: rgba(255, 110, 0, .4);
                animation-delay: .41s;
            }
        }
    }

    @keyframes move {
        0% {
            top: 10px;
            transform: scale(1.1);
        }
        10% {
            top: 20px;
            transform: scale(1.2);
        }

        100% {
            top: 34px;
            transform: scale(1.4);
        }
    }
</style>
