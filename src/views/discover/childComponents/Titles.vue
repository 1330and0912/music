<template>
    <div class="title">
        <div class="text">{{textLeft}}</div>
        <div @click="btnClick" class="btn">{{textRight}}</div>
    </div>
</template>

<script>
    export default {
        name: "Title",
        props: ['text-left', 'text-right'],
        methods:{
            btnClick() {
                this.$emit('click')
            }
        }
    }
</script>

<style lang="less" scoped>
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 45px;

        .text {
            font-weight: 700;
            font-size: 16px;
        }

        .btn {
            width: 80px;
            height: 25px;
            line-height: 25px;
            background-color: white;
            text-align: center;
            border-radius: 25px;
            font-size: 14px;
            border: 1px solid rgba(0, 0, 0, .1);
            transition: background-color .3s;

            &:active {
                background-color: #EEEEEE;
            }
        }
    }
</style>
