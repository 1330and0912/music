<template>
    <div @click="back" class="nav">
        <img src="~assets/img/singleDetail/return.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: "FixedNav",
        methods: {
            back() {
                setTimeout(()=>{
                    this.$router.back()
                },200)
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav {
        position: relative;
        z-index: 999;
        transition: transform .3s;
        &:active {
            transform: scale(0);
        }
        img {
            transform: rotate(180deg);
            border-radius: 50%;
            opacity: .7;
            position: absolute;
            top:  150px;
            left: -13px;
            width: 50px;
            height: 50px;
            background-color: slateblue;
        }
    }
</style>
