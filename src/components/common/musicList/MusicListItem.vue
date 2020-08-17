<template>
    <div :class="musicInfo.id==getCurrentMusic.id?'current-play-music':''"
         @click="songPlay(musicInfo.id)"
         class="music-list-item">
        <img :src="musicInfo.bg" alt="">
        <span>{{musicInfo.songName}}-{{musicInfo.author}}</span>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
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
        data() {
            return {}
        },
        computed: {
            ...mapGetters('musicDetail', ['getCurrentMusic'])
        },
        created() {
        },
        methods: {
            ...mapActions('musicDetail', ['playMusic']),
            songPlay(id) {
                this.playMusic(this.musicInfo)
                console.log(this.musicInfo);
            }
        }
    }
</script>

<style lang="less" scoped>
    .current-play-music {
        background-color: rgba(110, 1, 110, .2);
    }

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
