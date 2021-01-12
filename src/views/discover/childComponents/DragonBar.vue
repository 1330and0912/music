<template>
    <div class="dragon-bar">
        <div class="item" :key="index" v-for="(item,index) in list">
            <div class="icon">
                <van-icon :name="item"/>
            </div>
            <div class="text">{{text[index]}}</div>
        </div>
    </div>
</template>

<script>
    import {getDragonBar} from "../../../api";

    export default {
        name: "DragonBar",
        data() {
            return {
                list: [
                    'like-o',
                    'star-o',
                    'fire-o',
                    'friends-o',
                    'gift-o',
                    'service-o',
                ],
                text: [
                    '美日推荐',
                    '私人FM',
                    '歌单',
                    '排行榜',
                    '直播',
                    '音乐',
                ]
            }
        }

    }
</script>

<style lang="less" scoped>
    .dragon-bar {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        overflow-x: scroll;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .item {
        flex-shrink: 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        .icon {
            width: 40px;
            height: 40px;
            background-color: #FF3A3A;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            i {
                font-size: 22px;
                color: white;
            }
        }

        .text {
            margin-top: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
    }
</style>
