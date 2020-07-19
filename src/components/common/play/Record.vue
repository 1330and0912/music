<template>
    <div class="record " :class="isRotate?'move-start':''">
        <div class="record-bg"></div>
    </div>
</template>

<script>
    export default {
        name: "Record",
        props: {
            isRotate: {
                type: Boolean,
                default: true
            },

        },
        data() {
            return {
                move: 'move'
            }
        }
    }
</script>

<style lang="less" scoped>
    .record {
        margin: 0 auto;
        background-color: #151419;
        border-radius: 50%;
        height: 280px;
        width: 280px;
        border: 10px solid #5B5B5B;
        display: flex;
        justify-content: center;
        align-items: center;

        .record-bg {
            background-color: rgba(111, 0, 0, 1);
            border-radius: 50%;
            height: 200px;
            width: 200px;
            border: 5px solid rgba(0, 0, 0, 1);
            background-image: url("../../../assets/img/profile/private.jpg");
            background-size: cover;
        }
    }

    .move-start {
        animation:move 12s infinite linear;
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
