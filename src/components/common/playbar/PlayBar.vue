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
            <i @click.stop="test" class=" iconfont icon-zhankai"></i>
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
            ...mapGetters('musicDetail', ['getCurrentMusic', 'getIsPlay', 'getCurrentMusicPlayTime', 'getPlayMode', 'getProgressValue'])
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
            },
            getProgressValue(newVal) {
                this.$refs.audio.currentTime = newVal
                this.getCurrentTime(newVal)
            }
        },
        methods: {
            ...mapActions('musicDetail', ['toggleMusicState', 'getCurrentTime', 'nextSong', 'randomPlay', 'getMusicDuration']),
            //打开主播放器
            goMusciDetail() {
                this.$router.push('play')
            },
            //切换音乐播放和暂停状态
            isPlayMusic() {
                // this.$refs.audio.currentTime+=20
                this.toggleMusicState()
            },
            //音乐加载成功
            loadMusicSuccess() {
                console.log(1);
                this.getMusicDuration(this.$refs.audio.duration)
                this.getIsPlay && this.$refs.audio.play()
            },
            //获取当前播放时间
            getCurrentPlayTime(e) {
                let time = e.target.currentTime
                this.getCurrentTime(time)
            },
            //播放完成切换到下一曲
            playFinish() {
                //this.$refs.audio.currentTime = 0
                if (this.getPlayMode === 0) {
                    this.nextSong()
                } else if (this.getPlayMode === 1) {
                    this.$refs.audio.currentTime = 0
                } else if (this.getPlayMode === 2) {
                    this.randomPlay()
                }
            },
            test() {
                this.$refs.audio.currentTime = 282
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
