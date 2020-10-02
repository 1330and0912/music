<template>
    <i @click="collectClick" class="iconfont icon-aixin"></i>
</template>

<script>
    export default {
        name: "Collect",
        methods: {
            collectClick() {
                this.$emit('collect')
            }
        }
    }
</script>

<style lang="less" scoped>
    .icon-aixin {
        font-size: 20px;
        color: whitesmoke;
        transition: all .3s;

        &:active {
            color: red;
            transform: scale(1.5);
        }
    }
</style>
