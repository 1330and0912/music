<template>
    <div class="bottom-control">
        <ul class="control">
            <li>
                <div class="icon">
                    <van-icon name="smile-o"/>
                </div>
                <div class="title">
                    夜间模式
                </div>
            </li>
            <li>
                <div class="icon">
                    <van-icon name="setting-o"/>
                </div>
                <div class="title">
                    设置
                </div>
            </li>
            <li>
                <div class="icon">
                    <van-icon name="stop-circle-o"/>
                </div>
                <div class="title">
                    退出
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BottomControl"
    }
</script>

<style lang="less" scoped>
    .bottom-control {
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        height: 49px;
        padding: 10px 0px;
        display: flex;
        align-items: center;
    }

    .control {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
            flex-grow: 1;
            height: 49px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color .3s;

            &:active {
                background-color: silver;
            }

            .icon {
                display: flex;
                align-items: center;
                margin-right: 7px;
                font-size: 18px;
            }

            .title {
                font-size: 14px;
            }
        }
    }
</style>
