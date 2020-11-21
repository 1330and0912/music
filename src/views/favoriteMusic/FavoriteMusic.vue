<template>
    <div id="favoriteMusic" :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
        <nav-header title="喜欢的音乐"/>
        <top-info/>
        <div class="list-wrap">
            <div class="h">
                <i class="iconfont icon-bofang1"></i>
                <span class="play-all">播放全部(共{{likeMusic.length}}首)</span>
            </div>
            <music-list :music-info="likeMusic"/>
        </div>
    </div>
</template>

<script>
    import NavHeader from "../../components/common/NavHeader";
    import {getLikeList, getLyric, getSongDetail} from "../../api";
    import {mapState, mapActions} from 'vuex'
    import {dataLyric} from "../../common/dataLyric";
    import MusicList from "../../components/common/musicList/MusicList";
    import TopInfo from "./childComponents/TopInfo";

    export default {
        name: "FavoriteMusic",
        components: {TopInfo, MusicList, NavHeader},
        data() {
            return {
                likeList: [],
            }
        },
        computed: {
            ...mapState('login', ['uid']),
            ...mapState('collect', ['likeMusic', 'ids'])
        },
        methods: {
            ...mapActions('collect', ['saveLikeMusic']),
            async getMusicInfo() {
                const {songs} = await getSongDetail(this.ids.join(','))
                songs.forEach(async item => {
                    const mvid = item.mv
                    const {id, name: songName} = item
                    const author = item.ar[0].name
                    const bg = item.al.picUrl
                    const lyric = dataLyric((await getLyric(item.id)).lrc)
                    this.likeList.push({mvid, id, songName, author, bg, lyric})
                    this.saveLikeMusic({mvid, id, songName, author, bg, lyric})
                })
            }
        },
        created() {
            this.getMusicInfo()
        }
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 99px !important;
    }

    #favoriteMusic {
        padding-top: 1px;
        height: 100%;
        position: relative;

    }

    .list-wrap {
        position: relative;
        z-index: 1;
        margin-top: 60%;
        height: 65%;
        width: 100%;
        border-radius: 22px;
        background-color: white;

        .h {
            padding: 20px 15px 10px;

            .icon-bofang1 {
                font-size: 18px;
                margin-right: 7px;
            }
        }
    }
</style>
