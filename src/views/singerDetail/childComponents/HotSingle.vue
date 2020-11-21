<template>
    <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" class="hot-single">
        <music-list :music-info="musicInfo"/>
    </div>
</template>

<script>
    import MusicList from "../../../components/common/musicList/MusicList";
    import {getHotSongTop50, getSongURL, getLyric} from "../../../api";
    import {dataLyric} from "../../../common/dataLyric";

    export default {
        name: "HotSingle",
        components: {MusicList},
        props: ['id'],
        data() {
            return {
                musicInfo: []
            }
        },
        created() {
            this.getMusicInfo()
        },
        methods: {

            async getMusicInfo() {
                this.musicInfo = []
                let res = await getHotSongTop50(this.id)
                let tempInfo = []
                res.songs.forEach(async (item, index) => {
                    let lrc = (await getLyric(item.id)).lrc || []
                    let lyric = dataLyric(lrc)
                    let id = item.id
                    let author = item.ar[0].name
                    let songName = item.name
                    let bg = item.al.picUrl
                    let mvid = item.mv
                        tempInfo.push({mvid, id, songName, author, bg, lyric})
                    if (index == res.songs.length - 1) {
                        this.musicInfo.push(...tempInfo)
                    }
                })
            }
        },
        watch: {
            id() {
                this.musicInfo = []
                this.getMusicInfo()
            }
        },
        activated() {
        }
    }
</script>

<style scoped>
    .bottom-padding {
        padding-bottom: 49px !important;
    }

    .hot-single {
        height: 100%;
        overflow-y: scroll;
    }
</style>
