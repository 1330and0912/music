<template>
    <div class="search-result-wrap">
        <loading :show-loading="!musicInfo.length && !finished "/>
        <van-list
                :immediate-check="false"
                :class="this.$store.state.isShowPlayBar?'bottom-padding':''"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <div class="search-result">
                <music-list v-if="searchSuccess" class="music-list" :music-info="musicInfo"/>
                <div v-else>未找到</div>
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
                newMusicInfo: new Set(),
                searchSuccess: true,
                loading: false,
                finished: false,
                offset: 0,
                count: 0,//歌曲数量,
            }
        },
        computed: {
            ...mapGetters('search', ['getSearchWord']),

        },
        watch: {
            async getSearchWord() {
                this.musicInfo = []
                this.count = 0
                this.finished = false
                if (this.getSearchWord) {
                    this.newMusicInfo.clear()
                    this.getMusicInfo(true, true)
                }
            }
        },
        created() {
            if (!this.getSearchWord) {
                this.$router.back()
            } else {
                this.getMusicInfo(true, true)
            }
        },
        methods: {
            async getMusicInfo(isClear = true, restOffset = true) {
                this.searchSuccess = true
                isClear && (this.musicInfo = [])
                if (restOffset) {
                    this.offset = 0
                } else {
                    this.offset++
                }
                let musicInfo = []
                search(this.getSearchWord, 30, 1, this.offset * 30).then(res => {
                    this.count = res.result.songCount / 2
                    if (res.result.songCount) {
                        res = res.result.songs || []
                        res.forEach(async (item, index) => {
                            let mvid = item.mvid
                            let pic = await getAlbum(item.artists[0].id)
                            let lrc = (await getLyric(item.id)).lrc || false
                            let url = (await getSongURL(item.id)).data[0].url || false
                            let id = item.id
                            let songName = item.name
                            let author = item.artists[0].name
                            let bg = pic && pic.artist && pic.artist.picUrl || 0
                            let musicUrl = url
                            if (lrc && url) {
                                this.newMusicInfo.has(item.id) ||
                                this.musicInfo.push({
                                    mvid,
                                    id,
                                    songName,
                                    author,
                                    bg,
                                    musicUrl,
                                    lyric: dataLyric(lrc.lyric)
                                })
                            }
                            if (index == res.length - 1) {
                                this.loading = false
                            }
                            this.newMusicInfo.add(item.id)
                        })
                    } else {
                        this.searchSuccess = false
                        this.finished = true
                    }
                })
            },

            ...mapActions('search', ['setSearchWord']),
            onLoad() {
                if (this.newMusicInfo.size >= this.count) {
                    this.finished = true
                } else {
                    this.getMusicInfo(false, false)
                }
            }

        },
        deactivated() {
            this.$route.path != '/play' && this.setSearchWord('')
        }

    }
</script>

<style lang="less" scoped>
    .search-result-wrap {
        width: 100%;
        height: 100%;
    }

    .search-result {
        padding-top: 49px;
        width: 100%;
        height: 100%;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }
</style>
