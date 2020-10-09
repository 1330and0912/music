<template>
    <div class="back">
        <span>
            <i @click="back" class="iconfont icon-zuojiantou"></i>
        </span>
        <collect @collect="collectMV"/>
    </div>
</template>

<script>
    import Collect from "../../Collect";

    export default {
        name: "Back",
        components: {Collect},
        methods: {
            back() {
                this.$router.back()
            },
            collectMV() {
                this.$toast("收藏成功")
            }
        }
    }
</script>

<style lang="less" scoped>

    .back {
        height: 34px;
        background-color: #3366CC;
        /*background-image: linear-gradient(rgba(220,0,220,.1),rgba(0,222,111,.4));*/
        border-bottom: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;

        .icon-zuojiantou {
            font-size: 30px;
            color: white;
        }


    }
</style>
