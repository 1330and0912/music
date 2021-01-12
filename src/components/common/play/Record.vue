<template>
    <div class="record-wrap">
        <div class="needle-wrap" :class="isRotate?'needle-start':'needle-pause'" >
            <img class="needle" src="~assets/img/video/needle.png" alt="">
        </div>
        <div class="record " :class="isRotate?'move-start':'move-pause'">
            <div class="record-bg" :style="{backgroundImage:`url(${bg}?param=400y400)`}"></div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Record",
        props: {
            isRotate: {//控制圆盘是否旋转
                type: Boolean,
                default: true
            },
            bg:String
        },
        data() {
            return {
                move: 'move'
            }
        }
    }
</script>

<style lang="less" scoped>
    .record-wrap {
        transition: opacity  1s;
        margin-top: 100px;
        overflow-y: hidden;
        display: flex;
        justify-content: center;
        width: 100%;
        height:calc(100% - 100px);
        z-index: 999;
    }

    .record {
        background-image: url("../../../assets/img/video/disc.png");
        background-position: center;
        background-size: cover;
        position: relative;
        background-repeat: no-repeat;
        border-radius: 50%;
        height:280px;
        width: 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        .record-bg {
            background-color: rgba(111, 0, 0, 1);
            border-radius: 50%;
            height: 180px;
            width: 180px;
            border: 2px solid rgba(0, 0, 0, 1);
            background-image: url("../../../assets/img/profile/private.jpg");
            background-size: cover;
        }
    }

    .move-start {
        animation: move 12s infinite linear;
    }
    .move-pause {
        animation: move 12s infinite linear;
        animation-play-state: paused;
    }
    .needle-start{
        transform-origin: 0px 22px;
        transform: rotate(43deg);
    }
    .needle-pause{
        transform-origin: 0px 22px;
        transform: rotate(10deg);
    }
    .needle-wrap{
        transition:transform  1s;
        position: absolute;
        z-index: 11;
        top: 40px;
        left: 200px;
        width: 100px;
        height: 140px;
        img{
            transform: rotate(-40deg);
            width: 100px;
            height: 140px;
        }
        &:before{
            content: '';
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background-color: rgba(222,222,222,1);
            box-shadow: 0 0 11px darkslategrey;
            position: absolute;
            z-index: 11;
            top: 16px;
            left: -36px;
        }
    }
    @keyframes move {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
