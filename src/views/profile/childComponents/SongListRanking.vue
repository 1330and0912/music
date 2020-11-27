<template>
    <div class="song-list-rank">
        <div class="title">
            <strong>推荐歌单</strong>
            <van-icon name="cross" color="#797A74"/>
        </div>
        <div class="item-wrap">
            <div class="item" @click="goSongList(item.id)" :key="item.id" v-for="item of songList">
                <div class="img-wrap">
                    <img v-lazy="item.coverImgUrl+'?param=50y50'" alt="">
                </div>
                <div class="text">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getTopList} from "../../../api";

    export default {
        name: "SongListRanking",
        data() {
            return {
                songList: []
            }
        },
        async created() {
            const {list: res} = await getTopList()
            this.songList = res.slice(0,6)
        },
        methods: {
            goSongList(id) {
                this.$router.push(`song-list/${id}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .song-list-rank {
        margin-top: 15px;
        width: 100%;
        background-color: white;
        padding: 10px 0px;
        border-radius: 8px;
    }

    .title {
        padding: 0 20px;
        width: 100%;
        height: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .item-wrap {
        width: 100%;

        .item {
            padding: 5px 20px;

            display: flex;
            align-items: center;
            transition: background-color .3s;

            &:active {
                background-color: rgba(0, 0, 0, .1);
            }

            .img-wrap {
                margin-right: 8px;
            }

            img {
                border-radius: 8px;
                width: 40px;
                height: 40px;
            }
        }
    }
</style>
