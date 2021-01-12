<template>
    <div v-show="isShowBackTop" @click="backTop" class="back-top">
        <van-icon name="back-top" size="6vw" color="white"/>
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        props: ['ref-name'],
        data() {
            return {
                isShowBackTop: true
            }
        },
        methods: {
            backTop() {
                // console.log(this.$parent.$refs[this.refName]);
                this.$parent.$refs[this.refName].scrollTo({
                    top: '0',
                    behavior: 'smooth'
                });
            }
        },
    }
</script>

<style lang="less" scoped>
    .back-top {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background-color: rgba(121,11,222,.8);
        position: fixed;
        z-index: 999;
        right: 20px;
        bottom: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 11px rgba(2, 2, 2, .5),inset -4px -4px 11px rgba(123, 11, 120, .5);
        animation: move  5s  infinite linear;
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
