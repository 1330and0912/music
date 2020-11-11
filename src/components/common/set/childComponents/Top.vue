<template>
    <div class="wrap">
        <div class="top">
            <div class="h">
                <div class="info">
                    <strong>
                        开通黑胶VIP
                    </strong>
                    <div class="context">
                        加入黑胶VIP,立享超17项专属特权
                    </div>
                </div>
                <div class="vip">
                    会员中心
                </div>
            </div>
            <div class="b">
                <div>
                    黑胶VIP买1得8,立省1200元！
                </div>
                <div class="r">1折</div>
            </div>
        </div>
        <div class="m">
            <div class="m-left">
                <div class="icon">
                    <van-icon name="award"/>
                </div>
                <div class="m-l-text">
                    <strong>
                        云贝中心
                    </strong>
                    <div class="m-l-t-b">
                        签到 >
                    </div>
                </div>
            </div>
            <div class="m-right">
                <div class="icon">
                    <van-icon name="card"/>
                </div>
                <div class="m-r-text">
                    <strong>
                        消息中心
                    </strong>
                    <div class="m-r-t-b">
                        有关注新歌发布
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="icon">
                <van-icon name="wap-home"/>
            </div>
            <strong>
                创作者中心
            </strong>
            <div class="r">
                <van-icon name="arrow"/>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style lang="less" scoped>
    @text-color: #D4D4D4;

    .top {
        padding: 15px 10px;
        width: 100%;
        background-image: linear-gradient(#848484, #949494, #A1A1A1, #A5A5A5, #BABABA);
        border-radius: 10px;
    }

    .h {
        display: flex;
        align-items: center;
        justify-content: space-between;
        strong {
            color: white;
        }

        .context {
            padding-top: 10px;
            font-size: 12px;
            color: @text-color;
        }

        .vip {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            color: white;
            height: 30px;
            width: 80px;
            border-radius: 30px;
            border: 1px solid white;
        }
    }

    .b {
        margin-top: 8px;
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top:0.5px solid #969696;

        div {
            color: @text-color;
            font-size: 12px;
        }

        .r {
            width: 25px;
            height: 25px;
            background-color: #E52E43;
            text-align: center;
            line-height: 25px;
            font-style: italic;
            color: white;
        }
    }

    .m {
        border-radius: 10px;
        padding: 10px;
        margin-top: 20px;
        width: 100%;
        height: 80px;
        background-color: white;
        display: flex;
        align-items: center;

        .m-left {
            display: flex;
            justify-content: start;
            align-items: center;
            padding-right: 40px;
            border-right: 1px solid #ccc;
        }

        .icon {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: #F3F3F3;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 7px;
        }

        .m-l-t-b {
            height: 20px;
            border: 1px solid #FF3A3A;
            width: 50px;
            border-radius: 20px;
            font-size: 12px;
            color: #FF3A3A;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 3px;
        }

        .m-right {
            padding-left: 20px;
            display: flex;
            align-items: center;

            strong {
                position: relative;

                &::before {
                    position: absolute;
                    content: '46';
                    color: white;
                    font-weight: normal;
                    text-align: center;
                    line-height: 20px;
                    width: 30px;
                    height: 20px;
                    font-size: 12px;
                    background-color: #FF3A3A;
                    border-radius: 20px;
                    top: 0;
                    right: -33px;
                }
            }

            .m-r-t-b {
                margin-top: 7px;
                font-size: 12px;
                color: #939393;
            }
        }
    }

    .bottom {
        padding: 10px;
        margin-top: 20px;
        background-color: #FFffff;
        display: flex;
        align-items: center;
        height: 45px;

        .icon {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: #F3F3F3;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 7px;
        }

        .r {
            padding-left: 166px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
