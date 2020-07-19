<template>
    <div class="header-bar">
        <div class="nav-wrap">
            <span class="nav-left">我的音乐</span>
            <span class="nav-right ">
                <i class="iconfont icon-tiyu-paobu"></i>
                <i class="iconfont icon-jiantouyou"></i>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar",
        props:{
            text:String,
            icon:String
        }
    }
</script>

<style lang="less" scoped>
    .nav-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nav-left {
            font-size: 18px;
            font-weight: 700;

            &:active {
                color: rgba(0,0,0,.4);
            }
        }

        .nav-right {
            color: @gray-font;
        }
    }


</style>
