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
        height:35%;
        width: 100%;
        transition: background-color .3s;

        .m {
            display: flex;
            padding: 0px 15px 0;
            width: 100%;
            align-items: center;
            padding-top: 65px;
            .img-wrap {
                flex-shrink: 0;
                height: 50%;
                width: 38%;

                img {
                    border-radius: 8px;
                    width: 100%;
                    height: 100%;
                }
            }


            .info {
                margin-left: 20px;

                .header {
                    color: white;
                    font-size: 18px;
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
                        border-radius: 50%;
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .b-icon{
            margin-top: 15px;
            color: white;
            padding:0 40px;
            display: flex;
            width: 100%;
            justify-content: space-between;

            .icon-wrap{
                font-size: 24px;
                text-align: center;
                .text{
                    font-size: 14px;
                }
            }
        }
    }
</style>
