<template>
    <div @click="back" class="back">
        <span>
            <i class="iconfont icon-zuojiantou"></i>
            返回
        </span>
    </div>
</template>

<script>
    export default {
        name: "Back",
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>

    .back {
        height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: top .6s;
        position: fixed;
        top: 30px;
        span {
            color: #000000;
            display: flex;
            align-items: center;
            font-size: 14px;

            i {
                font-size: 20px;
                margin-right: 6px;
            }
        }
    }
</style>
