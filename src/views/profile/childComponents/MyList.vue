<template>
    <div class="my-list">
        <ul>
            <li>
                <i class="iconfont icon-yinyue"></i>
                本地音乐
            </li>
            <li>
                <i class="iconfont icon-xiazai"></i>
                下载管理
            </li>
            <li>
                <i class="iconfont icon-diantai"></i>
                我的电台
            </li>
            <li>
                <i class="iconfont icon-shoucang"></i>
                我的收藏
            </li>
            <li>
                <i class="iconfont icon-guanzhu"></i>
                关注新歌
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MyList",
        data() {
            return {
                optionList: ['本地音乐', '下载管理', '', '', '']
            }
        }
    }
</script>

<style lang="less" scoped>
    .my-list {
        padding: 10px;
    }

    ul {
        display: flex;
        color: rgba(255, 255, 255, .8);

        li {
            width: 20%;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 12px;

            i {
                font-size: 22px;
                padding-bottom: 8px;
            }
        }
    }
</style>
