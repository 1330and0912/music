<template>
    <div class="search-result">
        <music-list v-if="searchSuccess" class="music-list" :music-info="musicInfo"/>
        <div v-else>未找到</div>
    </div>
</template>

<script>
    import MusicList from "../../components/common/musicList/MusicList";

    import {search, getSongURL, getLyric} from "../../api";
    import {dataLyric} from "../../common/dataLyric";

    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "SearchResult",
        components: {MusicList},
        data() {
            return {
                musicInfo: [],
                searchSuccess: true,
            }
        },
        computed: {
            ...mapGetters('search', ['getSearchWord']),

        },
        watch: {
            async getSearchWord() {
                this.getMusicInfo()
            }
        },
        created() {
            this.getMusicInfo()
        },
        methods: {
            async getMusicInfo() {
                this.searchSuccess = true
                this.$store.state.isShowLoading = true
                this.musicInfo = []
                let res = await search(this.getSearchWord)
                if (res.result.song) {
                    res = res.result.song.songs
                    res.forEach(async item => {
                        if ((await getSongURL(item.id)).data[0].url && (await getLyric(item.id)).lrc) {
                            this.musicInfo.push({
                                id: item.id,//音乐id
                                songName: item.name,//歌曲名
                                author: item.ar[0].name,//演唱者
                                bg: item.al.picUrl,//歌曲背景
                                musicUrl: (await getSongURL(item.id)).data[0].url,//歌曲url
                                lyric: dataLyric((await getLyric(item.id)).lrc.lyric)//歌词
                            })
                        }
                    })
                    this.$store.state.isShowLoading = false
                } else {
                    this.$store.state.isShowLoading = false
                    this.searchSuccess = false
                }
            },
            ...mapActions('search', ['setSearchWord'])
        }

    }
</script>

<style lang="less" scoped>
    .search-result {
        padding-top: 60px;
        /*background-color: rgba(255,0,0,.3);*/
    }
</style>
