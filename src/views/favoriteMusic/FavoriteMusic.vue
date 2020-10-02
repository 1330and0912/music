<template>
    <div id="favoriteMusic">
        <nav-header title="喜欢的音乐"/>
        <music-list :music-info="likeList"/>
    </div>
</template>

<script>
    import NavHeader from "../../components/common/NavHeader";
    import {getLikeList, getLyric, getSongDetail} from "../../api";
    import {mapState, mapActions} from 'vuex'
    import {dataLyric} from "../../common/dataLyric";
    import MusicList from "../../components/common/musicList/MusicList";

    export default {
        name: "FavoriteMusic",
        components: {MusicList, NavHeader},
        data() {
            return {
                likeList: [],
                ids: ''
            }
        },
        computed: {
            ...mapState('login', ['uid'])
        },
        methods: {
            async getLikeListData() {
                let res = await getLikeList(this.uid)
                this.ids = res.ids.join(',')
                this.getMusicInfo()
            },
            async getMusicInfo() {
                const {songs} = await getSongDetail(this.ids)
                songs.forEach(async item => {
                    const {id, name: songName} = item
                    const author = item.ar[0].name
                    const bg = item.al.picUrl
                    const lyric = dataLyric((await getLyric(item.id)).lrc.lyric)
                    this.likeList.push({id, songName, author, bg, lyric})
                })
                console.log(songs);
            }
        },
        created() {
            this.getLikeListData()
        }
    }
</script>

<style lang="less" scoped>

</style>
