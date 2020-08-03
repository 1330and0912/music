<template>
    <div id="recentPlay">
        <music-list :music-info="recentPlay"/>
    </div>
</template>

<script>
    import {getRecentPlay} from "api";

    import MusicList from "components/common/musicList/MusicList";

    import {mapActions} from 'vuex'

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
            //获取用户id
            this.uid = JSON.parse(window.sessionStorage.getItem('profile')).userId
            const {allData: res} = await getRecentPlay(this.uid)
            //console.log(res);
            res.forEach(item => {
                this.recentPlay.push({
                    id: item.song.id,//音乐id
                    songName: item.song.name,//歌曲名
                    author: item.song.ar[0].name,//演唱者
                    bg: item.song.al.picUrl//歌曲背景
                })
            })
            this.saveRecentPlay(this.recentPlay)//将播放过的歌曲信息保存到vuex
            // console.log(this.recentPlay);
        },
        methods: {
            ...mapActions('musicDetail',['saveRecentPlay']),

        }
    }
</script>

<style lang="less" scoped>
    #recentPlay {
        color: white;
        height: 100%;
        background-image: url("../../assets/img/recent/bg.jpg");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        padding: 55px 0;
    }
</style>
