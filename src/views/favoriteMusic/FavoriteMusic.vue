<template>
    <div id="favoriteMusic">
        <nav-header title="喜欢的音乐"/>
        <top-info/>
        <div class="list-wrap">
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
                    console.log(item);
                    const mvid = item.mv
                    const {id, name: songName} = item
                    const author = item.ar[0].name
                    const bg = item.al.picUrl
                    const lyric = dataLyric((await getLyric(item.id)).lrc.lyric)
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
        border-radius: 22px;
        background-color: white;
    }
</style>
