<template>
    <div class="recommend-play-list">
        <titles text-left="懂你的精选歌单" text-right="查看更多"/>
        <div class="item-wrap">
            <div @click="goPlayList(item.id)" :key="item.id" class="item" v-for="item in playList">
                <div class="icon">
                    <van-icon name="play-circle-o"/>
                    <div class="play-count">
                        {{sumPlayCount(item.playCount)}}
                    </div>
                </div>
                <div class="img-wrap">
                    <img v-lazy="item.picUrl" alt="">
                </div>
                <div class="text">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Titles from "./Titles";
    import {getRecommendPlayList} from "../../../api";

    export default {
        name: "RecommendPlayList",
        components: {Titles},
        data() {
            return {
                playList: []
            }
        },
        async created() {
            const {result: res} = await getRecommendPlayList()
            this.playList = res
        },
        computed: {
            sumPlayCount() {
                return (count) => {
                    let w = count > 100000000 ? 100000000 : 10000
                    let s = count > 100000000 ? '亿' : '万'
                    return ((count / w).toFixed(0)) + s
                }
            }
        },
        methods:{
            goPlayList(id){
                this.$router.push(`song-list/${id}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .recommend-play-list {
        margin-top: 20px;
    }

    .item-wrap {
        display: flex;
        overflow-x: scroll;

        .item {
            position: relative;
            flex-shrink: 0;
            width: 30%;
            margin: 0 10px 0 0;
            border-radius: 8px;

            img {
                border-radius: 8px;
                width: 100%;
            }

            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 5px;
                right: 5px;
                color: white;

                .play-count{
                    margin-left: 3px;
                    font-size: 12px;
                }
            }

            .text {
                font-size: 13px;
                line-height: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                width: 100px;
            }
        }
    }
</style>
