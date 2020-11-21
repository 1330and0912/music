<template>
    <div class="recommend-album">
        <titles text-left="新碟上架" text-right="最新专辑"/>
        <div class="album-wrap">
            <div class="item" v-for="item in albumData" :key="item.id">
                <div class="img-wrap">
                    <img v-lazy="item.blurPicUrl+'?param=200y200'" alt="">
                </div>
                <div class="text">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Titles from "./Titles";
    import {getAlbumNewSt} from "../../../api";

    export default {
        name: "RecommendAlbum",
        components: {Titles},
        data() {
            return {
                albumData: []
            }
        },
        async created() {
            const {albums: res} = await getAlbumNewSt()
            this.albumData = res
        }
    }
</script>

<style lang="less" scoped>
    .recommend-album {
        width: 100%;
        margin-top: 20px;
    }

    .album-wrap {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow-x: scroll;
        .item {
            width: 30%;
            height: 100%;
            flex-shrink: 0;
            margin-right:10px;
            border-radius:8px;
            overflow: hidden;
            background-color: #EEEEEE;
            img {
                padding: 0;
                margin: 0;
                width: 100%;
            }
            .text{
                height: 35px;
                line-height: 30px;
                font-size: 13px;
                padding: 0 5px;
            }
        }
    }
</style>
