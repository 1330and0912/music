<template>
    <div class="recommend-song">
        <titles text-left="聆听华语佳曲" text-right="播放音乐" @click="playSong"/>
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
    import {mapActions} from 'vuex'

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
            res && res.forEach(async item => {
                const {id, name: songName, picUrl: bg} = item
                let lyric = (await getLyric(id)).lrc
                lyric = dataLyric(lyric)
                const author = item.song.artists[0].name
                this.musicData.push({id, songName, bg, author, lyric})
            })
        },
        methods: {
            ...mapActions('musicDetail', ['playMusic']),
            playSong() {
                this.playMusic(this.musicData[0])
            }
        }

    }
</script>

<style lang="less" scoped>
    .recommend-song {
        margin-top: 10px;
        height: 220px;

    }

    .list {
        border-radius: 8px;
        background-color: white;
        height: 175px;
    }
</style>
