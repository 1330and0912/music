<template>
    <div class="base-info" :style="{opacity:opacity}">
        <div class="m">
            <div class="img-wrap">
                <img v-lazy="baseInfo.bg" alt="">
            </div>
            <div class="info">
                <div class="header">最近关注</div>
                <div class="user-list">
                    <div class="item" v-for="item in subscribers">
                        <img v-lazy="item.avatarUrl" alt="">
                    </div>
                </div>
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
            padding: 15px 15px 0;
            width: 100%;
            height: 100%;
            align-items: center;

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
    }
</style>
