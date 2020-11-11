<template>
    <div class="my-list">
        <ul>
            <li>
                <div class="icon">
                    <van-icon name="fire-o" color="white"/>
                </div>
                <span class="text">本地音乐</span>
            </li>
            <li>
                <div class="icon">
                    <van-icon name="wap-home-o" color="white"/>
                </div>
                <span class="text">云盘</span>
            </li>
            <li>
                <div class="icon">
                    <van-icon name="bag-o" color="white"/>
                </div>
                <span class="text">已购</span>
            </li>
            <li>
                <div class="icon">
                    <van-icon name="play-circle-o" color="white"/>
                </div>
                <span class="text">最近播放</span>
            </li>
            <li>
                <div class="icon">
                    <van-icon name="contact" color="white"/>
                </div>
                <span class="text">我的好友</span>
            </li>
            <li>
                <div class="icon">
                    <van-icon name="flower-o" color="white"/>
                </div>
                <span class="text">收藏和赞</span>
            </li>
            <li>
                <div class="icon">
                    <van-icon name="service-o" color="white"/>
                </div>
                <span class="text">我的电台</span>
            </li>
            <li>
                <div class="icon">
                    <van-icon name="add-square" color="white"/>
                </div>
                <span class="text">音乐应用</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MyList",

    }
</script>

<style lang="less" scoped>
    .my-list {
        box-shadow: 0 0 6px #EEEEEE;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        color: rgba(0, 0, 0, 1);
        width: 100%;

        li {
            width: 25%;
            padding: 10px 0;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            flex-wrap: wrap;
            font-size: 12px;

            .icon {
                width: 28px;
                height: 28px;
                background-color: #FC3B2A;
                border-radius: 50%;
                margin-bottom: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .text {
                font-size: 12px;
                color: #797A74;
            }
        }
    }
</style>
