<template>
    <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" id="recentPlay">
        <music-list :music-info="recentPlay"/>
    </div>
</template>

<script>
    import {getRecentPlay, getSongURL, getLyric} from "api";

    import MusicList from "components/common/musicList/MusicList";

    import {mapActions} from 'vuex'
    import {dataLyric} from "common/dataLyric";

    export default {
        name: "RecentPlay",
        components: {MusicList},
        data() {
            return {
                recentPlay: [],
                uid: ''
            }
        },
        async created() {
            this.$store.state.isShowLoading = true

            //获取用户id
            this.uid = JSON.parse(window.sessionStorage.getItem('profile')).userId
            const {allData: res} = await getRecentPlay(this.uid)
            res.forEach(async (item) => {
                if ((await getSongURL(item.song.id)).data[0].url) {//如果获取不到音乐url则不添加
                    this.recentPlay.push({
                        id: item.song.id,//音乐id
                        songName: item.song.name,//歌曲名
                        author: item.song.ar[0].name,//演唱者
                        bg: item.song.al.picUrl,//歌曲背景
                        musicUrl: (await getSongURL(item.song.id)).data[0].url,//歌曲url
                        lyric: dataLyric((await getLyric(item.song.id)).lrc.lyric)//歌词
                    })
                }
            })
            this.$store.state.isShowLoading = false
            this.saveRecentPlay(this.recentPlay)//将播放过的歌曲信息保存到vuex
            // console.log(this.recentPlay);
        },
        methods: {
            ...mapActions('musicDetail', ['saveRecentPlay']),
        }
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 49px !important;
    }

    #recentPlay {
        overflow: scroll;
        height: 100%;
        color: white;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        padding: 49px 0 0;
    }
</style>
