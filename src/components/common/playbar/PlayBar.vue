<template>
    <div @click="goMusciDetail" id="playBar" :style="{bottom:getIsPlay?'0':'0'}">
        <div class="music-info">
            <img :class="getIsPlay?'move-start':'move-pause'" :src="getCurrentMusic.bg" alt="">
            <p class="music-name">
                <span class="song-name">{{getCurrentMusic.songName}}</span>
                <span class="author-name">{{getCurrentMusic.author}}</span>
            </p>
        </div>
        <div class="music-control">
            <i @click.stop="isPlayMusic" class="play iconfont" :class="getIsPlay?'icon-bofang':'icon-bofang1'"></i>
            <i class=" iconfont icon-zhankai"></i>
        </div>
        <audio @ended="playFinish" @timeupdate="getCurrentPlayTime" @canplay="loadMusicSuccess" ref="audio"
               :src="getCurrentMusic.musicUrl"></audio>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "PlayBar",
        computed: {
            ...mapGetters('musicDetail', ['getCurrentMusic', 'getIsPlay'])
        },
        watch: {
            //监听播放状态的改变来进行音乐的暂停与播放
            getIsPlay(newVal) {
                if (newVal) {
                    this.$nextTick(() => {
                        this.$refs.audio.play()
                    })
                } else {
                    this.$refs.audio.pause()
                }
            }
        },
        methods: {
            ...mapActions('musicDetail', ['toggleMusicState', 'getCurrentTime','nextSong']),
            goMusciDetail() {
                this.$router.push('play')
            },
            isPlayMusic() {
                // this.$refs.audio.currentTime+=20
                this.toggleMusicState()
            },
            loadMusicSuccess() {
                this.$refs.audio.play()
            },
            getCurrentPlayTime(e) {
                let time = e.target.currentTime.toFixed(2)
                this.getCurrentTime(time)
            },
            //播放完成触发
            playFinish() {
                this.nextSong()
                alert(111)
            }
        },
        created() {
        }

    }
</script>

<style lang="less" scoped>
    .move-start {
        animation: move 12s infinite linear;
    }

    .move-pause {
        animation: move 12s infinite linear;
        animation-play-state: paused;
    }

    #playBar {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        color: #f5f2f0;
        width: 100%;
        position: fixed;
        bottom: -49px;
        height: 49px;
        background-image: linear-gradient(120deg,
        rgba(0, 2, 0, 1),
        rgba(0, 0, 0, .6),
        rgba(0, 0, 0, .8),
        rgba(1, 2, 0, .6),
        rgba(0, 2, 0, 1));
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        align-items: center;
        transition: bottom .7s;

        .music-info {
            display: flex;
            align-items: center;

            .music-name {
                display: flex;
                flex-direction: column;

                .song-name {
                    font-size: 14px;
                }

                .author-name {
                    font-size: 12px;
                    padding-top: 3px;
                    color: rgba(255, 255, 255, .6);
                }
            }

            img {
                height: 35px;
                width: 35px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }

        .music-control {
            display: flex;
            align-items: center;

            i {
                &:first-child {
                    padding-top: 3px;
                }


                line-height: 44px;
                padding: 0 10px;
            }

            .play {
                font-size: 20px;
            }

        }
    }

    @keyframes move {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
