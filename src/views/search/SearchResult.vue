<template>
    <div class="search-result-wrap">
        <!--        <loading :show-loading="isShowLoading"/>-->
        <van-list
                offset="0"
                :immediate-check="false"
                :class="this.$store.state.isShowPlayBar?'bottom-padding':''"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <div class="search-result">
                <music-list class="music-list" :music-info="musicInfo"/>
            </div>
        </van-list>
    </div>
</template>

<script>
    import MusicList from "../../components/common/musicList/MusicList";
    import Loading from "../../components/common/loading/Loading";
    import {search, getSongURL, getLyric, getAlbum} from "../../api";
    import {dataLyric} from "../../common/dataLyric";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "SearchResult",
        components: {Loading, MusicList},
        data() {
            return {
                musicInfo: [],
                loading: true,
                finished: false,
                offset: 0,
                isShowLoading: true,
                limit: 15,
                songCount: 1000,
            }
        },
        computed: {
            ...mapGetters('search', ['getSearchWord']),

        },
        watch: {
            async getSearchWord() {
                this.finished = false
                this.loading = true
                this.offset = 0
                this.musicInfo = []
                this.getMusicInfo()
            }
        },
        created() {
            if (this.getSearchWord == '') return this.$router.back()
            this.getMusicInfo()
        },
        methods: {
            async getMusicInfo() {
                this.loading = true
                const {result: song} = await search(this.getSearchWord, this.limit, 1, this.offset * this.limit)
                if (song.songCount == 0) {
                    this.loading = false
                    this.finished = true
                    return
                }
                this.offset++
                song.songCount && (this.songCount = song.songCount)
                const songs = song.songs
                let musicInfo = songs.map(item => {
                    return {
                        id: item.id,
                        songName: item.name,
                        author: item.artists[0].name,
                        mvid: item.mvid,
                        singleId: item.artists[0].id
                    }
                })
                musicInfo.forEach(async (item, index) => {

                    item.singleId && (musicInfo[index].bg = (await getAlbum(item.singleId, 1)).artist.picUrl)
                    musicInfo[index].lyric = dataLyric((await getLyric(item.id)).lrc);
                    if (index == musicInfo.length - 1) {
                        this.musicInfo.push(...musicInfo)
                        this.loading = false
                        if (this.musicInfo.length >= this.songCount) {
                            this.finished = true
                        }
                    }
                })
            },
            ...mapActions('search', ['setSearchWord']),
            onLoad() {
                this.getMusicInfo()
            }

        },
        deactivated() {
            //this.$route.path != '/play' && this.setSearchWord('')
        }

    }
</script>

<style lang="less" scoped>
    .search-result-wrap {
        width: 100%;
        height: 100%;
    }

    .search-result {
        width: 100%;
        height: 100%;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }
</style>
