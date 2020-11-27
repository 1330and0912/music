<template>
    <div class="base-info" :style="{opacity:opacity}">
        <div class="m">
            <div class="img-wrap">
                <img v-lazy="baseInfo.bg+'?param=150y130'" alt="">
            </div>
            <div class="info">
                <div class="header">最近关注</div>
                <div class="user-list">
                    <div class="item" v-for="item in subscribers">
                        <img v-lazy="item.avatarUrl+'?param=50y50'" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="b-icon">
            <div class="icon-wrap">
                <van-icon name="chat-o" />
                <div class="text">2165</div>
            </div>
            <div class="icon-wrap">
                <van-icon name="good-job-o" />
                <div class="text">999</div>
            </div>
            <div class="icon-wrap">
                <van-icon name="browsing-history-o" />
                <div class="text">关注</div>
            </div>
            <div class="icon-wrap">
                <van-icon name="warning-o" />
                <div class="text">信息</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseInfo",
        props: ['base-info', 'subscribers', 'opacity'],
        methods: {}

    }
</script>

<style lang="less" scoped>
    .base-info {
        width: 100%;
        transition: background-color .3s;
        padding:60px 15px 10px;
        height: 236px;
        .m {
            display: flex;
            width: 100%;
            align-items: center;
            .img-wrap {
                flex-shrink: 0;
                img {
                    border-radius: 8px;
                    width:120px;
                }
            }


            .info {
                margin-left: 20px;

                .header {
                    color: white;
                    font-size: 14px;
                }

            }

            .user-list {
                margin-top: 6px;
                display: flex;
                flex-wrap: wrap;
                width: 100%;

                .item {
                    flex-shrink: 0;
                    padding: 10px 10px 0 0;
                    width: 40px;
                    height: 40px;

                    img {
                        border-radius: 10px;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .b-icon{
            color: white;
            padding:0 20px;
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin-top: 10px;
            .icon-wrap{
                font-size: 22px;
                text-align: center;
                .text{
                    font-size: 12px;
                }
            }
        }
    }
</style>
