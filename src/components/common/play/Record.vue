<template>
    <div class="record-wrap">
        <div class="record " :class="isRotate?'move-start':'move-pause'">
            <div class="record-bg" :style="{backgroundImage:`url(${bg})`}"></div>
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
        overflow-y: hidden;
        display: flex;
        justify-content: center;
        width: 100%;

        position: relative;
        z-index: 999;
    }

    .record {
        background-color: #151419;
        border-radius: 50%;
        height: 260px;
        width: 260px;
        border: 8px solid rgba(255, 255, 255, .5);
        display: flex;
        justify-content: center;
        align-items: center;

        .record-bg {
            background-color: rgba(111, 0, 0, 1);
            border-radius: 50%;
            height: 180px;
            width: 180px;
            border: 5px solid rgba(0, 0, 0, 1);
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

    @keyframes move {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
