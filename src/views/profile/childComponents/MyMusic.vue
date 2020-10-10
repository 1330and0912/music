<template>
    <div class="my-music">
        <header-bar text="我的音乐"/>
        <div class="musci-wrap">
            <div class="my-collect">
                <div @click="goFavoriteMusic" class="wrap">
                    <i class="iconfont icon-aixin"></i>
                    <span>我喜欢的音乐</span>
                    <div class="iconfont icon-bofang1">
                        心动模式
                    </div>
                </div>
            </div>
            <div class="my-collect private">

                <div @click="goMyCollect" class="wrap ">
                    <i class="iconfont icon-jiahao"></i>
                    <span>我的收藏</span>
                    <div class=" ">
                        来这里找好歌
                    </div>
                </div>
            </div>
            <div class="my-collect more">
                <div class="wrap">
                    <i class="iconfont icon-dibudaohanglan-
"></i>
                    <span>更多</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderBar from "./HeaderBar";

    export default {
        name: "MyMusic",
        components: {HeaderBar},
        methods: {
            goFavoriteMusic() {
                this.$router.push('favorite-music')
            },
            goMyCollect() {
                this.$router.push('my-collect')
            }
        }
    }
</script>

<style lang="less" scoped>
    .my-music {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background-color: white;
        padding: 30px 20px 0;
        margin-top: 20px;
    }


    .musci-wrap {
        margin: 10px 0 20px;
        display: flex;
        height: 140px;
        width: 100%;
        justify-content: space-between;

        .my-collect {
            width: 32%;
            background: url("../../../assets/img/profile/collect.jpg") no-repeat;
            background-size: 120px 140px;
            border-radius: 10px;
            overflow: hidden;
            position: relative;

            .wrap {
                color: rgba(255, 255, 255, 1);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .6);

                i {
                    font-size: 28px;
                    color: red;
                    margin: 30px 0 5px;
                }

                span {
                    font-size: 12px;
                    margin: 0px 0 20px;

                }

                div {
                    padding: 3px 6px;
                    border-radius: 10px;
                    background-color: rgba(255, 225, 225, .3);
                    font-size: 12px;
                }
            }
        }

        .private {
            background: url("../../../assets/img/profile/private.jpg") no-repeat;
            background-size: 120px 140px;

            .wrap {
                i {
                    color: white;
                }
            }

        }

        .more {
            background: url("../../../assets/img/profile/more.jpg") no-repeat;
            background-size: 120px 140px;

            .wrap {
                i {
                    margin-top: 0;
                    color: white;
                }
            }
        }

    }
</style>
