<template>
    <div @click="songPlay(musicInfo.id)" class="music-list-item">
        <img :src="musicInfo.bg" alt="">
        <span>{{musicInfo.songName}}-{{musicInfo.author}}</span>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import {getSongURL} from "api";

    export default {
        name: "MusicListItem",
        props: {
            musicInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data(){
            return {
            }
        },
        mounted() {
          //  console.log(this.musicInfo);
        },
        methods: {
            ...mapActions('musicDetail', ['playMusic']),
            songPlay(id) {
               // console.dir(this.audio);
                getSongURL(id).then((res) => {
                    this.playMusic({
                        songUrl: res.data[0].url,
                        id: id
                    })
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .music-list-item {
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        &:active {
            background-color: rgba(0, 0, 0, .2);
        }

        img {
            margin-right: 10px;
            width: 40px;
        }

    }
</style>
