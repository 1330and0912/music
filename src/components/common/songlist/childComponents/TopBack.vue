<template>
    <div class="headers" :style="{backgroundColor:`rgba(255,110,110,${bgColor})`}">
        <div class="title">
            <van-icon name="down" @click.native="back"/>
            <div class="text">
                {{title}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopBack",
        props:['title','bg-color'],
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
    .headers{
        height: 45px;
        width: 100%;
        position: fixed;
        top: 0;
        background-color:rgba(0,0,0,0);
        z-index: 111;
    }
    .title {
        width: 100%;
        padding: 0 15px;
        height: 45px;
        display: flex;
        align-items: center;

        .van-icon {
            font-size: 28px;
            transform: rotate(90deg);
            color: white;
        }


        .text {
            margin-left: 10px;
            color: white;
            width: 100px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

    }
</style>
