<template>
    <div @click="back" class="nav">
        返回
    </div>
</template>

<script>
    export default {
        name: "FixedNav",
        methods: {
            back() {
                setTimeout(()=>{
                    this.$router.back()
                },300)
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav {
        position: absolute;
        z-index: 999;
        color: white;
        width: 30px;
        height: 30px;
        background-color: salmon;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        border-radius: 50%;
        transition: transform .3s;
        &:active {
            transform: scale(1.3);
        }
    }
</style>
