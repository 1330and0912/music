<template>
    <div>
        <div class="music-serve">
            <div class="h">
                音乐服务
            </div>
            <ul class="list">
                <li>
                    <div class="icon">
                        <van-icon name="service-o"/>
                        <div class="title">听歌识曲</div>
                    </div>
                    <div class="text">可识别其他app歌曲</div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="balance-list-o"/>
                        <div class="title">云村有票</div>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="cart-o"/>
                        <div class="title">商城</div>
                    </div>
                    <div class="text">重低音炮九元抢</div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="cluster-o"/>
                        <div class="title">游戏专区</div>
                    </div>
                    <div class="text">试试赢10万豪礼</div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="bulb-o"/>
                        <div class="title">口袋彩铃</div>
                    </div>
                    <div class="text">我赌你绝对听过</div>
                </li>
            </ul>
        </div>
        <div class="music-serve">
            <div class="h">
                其他
            </div>
            <ul class="list">
                <li>
                    <div class="icon">
                        <van-icon name="manager-o" />
                        <div class="title">个性装扮</div>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="tosend" />
                        <div class="title">定时关闭</div>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="scan" />
                        <div class="title">扫一扫</div>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="music-o" />
                        <div class="title">边听边存</div>
                    </div>
                    <div class="text">未开启</div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="video-o" />
                        <div class="title">在线免流量听歌</div>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="eye-o" />
                        <div class="title">音乐黑名单</div>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="desktop-o" />
                        <div class="title">青少年模式</div>
                    </div>
                    <div class="text">未开启</div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="underway-o" />
                        <div class="title">音乐闹钟</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="music-serve">
            <ul class="list">
                <li>
                    <div class="icon">
                        <van-icon name="label-o" />
                        <div class="title">我的订单</div>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="hot-sale-o" />
                        <div class="title">优惠券</div>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="bulb-o" />
                        <div class="title">帮助与反馈</div>
                    </div>
                </li>
                <li>
                    <div class="icon">
                        <van-icon name="flower-o" />
                        <div class="title">关于</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MusicServe"
    }
</script>

<style lang="less" scoped>
    @text-color: #A8A8A8;

    .music-serve {
        border-radius: 10px;
        margin-top: 20px;
        width: 100%;
        padding: 10px;
        background-color: white;
    }

    .h {
        height: 22px;
        font-size: 12px;
        color: @text-color;
        border-bottom: 0.5px solid rgba(0,0,0,.1);
        margin-bottom: 10px;
    }

    .list {
        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 5px;
            transition: background-color .3s;

            &:active {
                background-color: #cccccc;
            }

            .icon {
                display: flex;
                align-items: center;

                .title {
                    font-size: 14px;
                    margin-left: 10px;
                }
            }

            .text {
                font-size: 12px;
                color: @text-color;
            }
        }
    }
</style>
