<template>
    <div class="recommend-song">
        <titles text-left="聆听华语佳曲" text-right="播放音乐"/>
        <div class="list">
            <music-list :music-info="musicData"/>
        </div>
    </div>
</template>

<script>
    import {getLyric, getRecommendSong} from "../../../api";
    import Titles from "./Titles";
    import MusicList from "../../../components/common/musicList/MusicList";
    import {dataLyric} from "../../../common/dataLyric";

    export default {
        name: "RecommendSong",
        components: {MusicList, Titles},
        data() {
            return {
                musicData: []
            }
        },
        async created() {
            const {result: res} = await getRecommendSong()
            res.forEach(async item => {
                const {id, name: songName, picUrl: bg} = item
                let lyric =(await getLyric(id)).lrc.lyric
                lyric = dataLyric(lyric)
                const author = item.song.artists[0].name
                this.musicData.push({id, songName, bg, author,lyric})
            })
        },

    }
</script>

<style lang="less" scoped>
    .recommend-song {
        margin-top: 10px;
        height: 220px;
    }

    .list {
        height: 175px;
    }
</style>
