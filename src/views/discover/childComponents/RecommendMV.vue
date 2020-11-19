<template>
    <div class="recommend-mv">
        <titles text-left="每日MV推荐" text-right="播放MV"/>
        <div class="mv-wrap">
            <div @click="playMV(item.id)" :key="item.id" class="item" v-for="item in mvData">
                <div class="img-wrap">
                    <img v-lazy="item.picUrl+'?param=200y200'" alt="">
                </div>
                <div class="text">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getRecommendMV} from "../../../api";
    import Titles from "./Titles";

    export default {
        name: "RecommendMV",
        components: {Titles},
        data() {
            return {
                mvData: []
            }
        },
        async created() {
            const {result: res} = await getRecommendMV()
            this.mvData = res
        },
        methods: {
            playMV(id) {
                this.$router.push(`music-video/${id}`)
            }
        },

    }
</script>

<style lang="less" scoped>
    .recommend-mv {
        width: 100%;
        height: 155px;
    }

    .mv-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        overflow-x: scroll;

        .item {
            flex-shrink: 0;
            width: 40%;
            height: 100%;
            margin-right: 10px;
            border-radius: 8px;

            img {
                border-radius: 8px;
                width: 100%;
                height: 100px;
            }

            .text {
                height: 18px;
                font-size: 13px;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>
