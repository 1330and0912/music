<template>
    <div :class="musicInfo.id==getCurrentMusic.id?'current-play-music':''"
         @click="songPlay(musicInfo.id)"
         class="music-list-item">
        <img v-lazy="musicInfo.bg" alt="">
        <div class="music-info">
            <span class="music-name">
                     {{musicInfo.songName}}
             </span>
            <span class="music-author">
                歌手：{{musicInfo.author}}
            </span>
        </div>
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
            ...mapActions('musicDetail', ['playMusic', 'writePlayQueuedData']),
            songPlay(id) {
                this.playMusic(this.musicInfo)
                console.log(this.musicInfo);
                let data
                if (window.localStorage.playQueuedData) {
                    data = JSON.parse(window.localStorage.playQueuedData)
                } else {
                    data = []
                }
                let index = data.findIndex(item => item.id == this.musicInfo.id)
                if (index == -1) {
                    data.push(this.musicInfo)

                }
                this.writePlayQueuedData(data)
            }
        }
    }
</script>

<style lang="less" scoped>
    .current-play-music {
        background-color: rgba(2, 2, 110, .1);
    }

    .music-list-item {
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        // border-bottom: 1px solid rgba(0, 0, 0, .2);

        &:active {
            background-color: rgba(0, 0, 0, .1);
        }

        img {
            margin-right: 10px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }

        .music-info {
            display: flex;
            flex-direction: column;

            .music-name {
                color: @night-mode-height-color;
                font-size: 14px;
            }

            .music-author {
                font-size: 12px;
                padding-top: 3px;
                color: @night-mode-color;
            }
        }

    }
</style>
