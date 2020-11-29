<template>
    <transition name="slide-down">
        <div @click.stop="goMusciDetail" id="playBar">
            <div class="music-info">
                <img :class="getIsPlay?'move-start':'move-pause'" :src="getCurrentMusic.bg+'?param=50y50'" alt="">
                <p class="music-name">
                    <span class="song-name">{{getCurrentMusic.songName}}</span>
                    <span class="author-name">{{getCurrentMusic.author}}</span>
                </p>
            </div>
            <div class="music-control">
                <i @click.stop="isPlayMusic" class="play iconfont" :class="getIsPlay?'icon-bofang':'icon-bofang1'"></i>
                <i @click.stop="showPopup" class=" iconfont icon-zhankai "></i>
            </div>
            <audio @ended="playFinish" @timeupdate="getCurrentPlayTime" @canplay="loadMusicSuccess" ref="audio"
                   :src="url">
            </audio>
            <van-popup round position="bottom"
                       v-model="isShowPopup"
                       @open="popupOpen"
                       @click.stop="popupClick">
                <play-queued/>
            </van-popup>
        </div>
    </transition>

</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import PlayQueued from "./PlayQueued";
    import {getSongURL} from "../../../api";

    export default {
        name: "PlayBar",
        components: {PlayQueued},
        computed: {
            ...mapGetters('musicDetail', ['getPlayQueuedData', 'getCurrentMusic', 'getIsPlay', 'getCurrentMusicPlayTime', 'getPlayMode', 'getProgressValue']),
        },
        data() {
            return {
                isShowPopup: false,//控制弹出层的显示
                url: null
            }
        },
        watch: {
            //监听播放状态的改变来进行音乐的暂停与播放
            getIsPlay(flag) {
                if (flag) {
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
            },
            getCurrentMusic(newVal) {
                getSongURL(newVal.id).then(res => {
                    this.url = res.data[0].url
                })
            }

        },
        methods: {
            ...mapActions('musicDetail', ['toggleMusicState',
                'getCurrentTime', 'nextSong', 'randomPlay', 'getMusicDuration', 'setCurrentMusic']),
            //打开主播放器
            goMusciDetail(e) {
                !e.target.className.includes('van-overlay') && this.$router.push('play')
            },
            //切换音乐播放和暂停状态
            isPlayMusic() {
                this.toggleMusicState()
            },
            //音乐加载成功
            loadMusicSuccess() {
                this.getMusicDuration(this.$refs.audio.duration)
                this.getIsPlay && this.$refs.audio.play()
            },
            //获取当前播放时间
            getCurrentPlayTime(e) {
                let time = e.target.currentTime
                this.getCurrentTime(time)
            },
            //播放完成切换模式
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
            //控制弹出层的显示
            showPopup() {
                this.isShowPopup = true
            },
            //打开控制层时触发
            popupOpen() {
            },
            popupClick() {
            }
        },
        created() {
            // 获取上次播放记录
            window.localStorage.currentMusic && this.setCurrentMusic(JSON.parse(window.localStorage.currentMusic))
        }

    }
</script>

<style lang="less" scoped>


    .slide-down-leave-to {
        transform:translateY(30%) ;
        opacity: 0;

    }
    .slide-down-leave-active {
        position: fixed;
        z-index: 301;
        transition: all .3s !important;
    }

    .move-start {
        animation: move 12s infinite linear;
    }

    .move-pause {
        animation: move 12s infinite linear;
        animation-play-state: paused;
    }

    #playBar {
        border-top: 1px solid rgba(0, 0, 0, .1);
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        color: @night-mode-height-color;
        width: 100%;
        position: fixed !important;
        z-index: 1111 !important;
        bottom: -1px;
        height: 49px;
        /*background-image: linear-gradient(120deg,*/
        /*rgba(0, 2, 0, 1),*/
        /*rgba(0, 0, 0, .6),*/
        /*rgba(0, 0, 0, .8),*/
        /*rgba(1, 2, 0, .6),*/
        /*rgba(0, 2, 0, 1));*/
        background-color: rgba(255,255,255,.95);
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        align-items: center;
        transition: bottom .3s;
        z-index: 11;

        .music-info {
            display: flex;
            align-items: center;


            .music-name {
                display: flex;
                flex-direction: column;
                width: 70%;

                .song-name {
                    font-size: 14px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 200px;
                }

                .author-name {
                    font-size: 12px;
                    padding-top: 3px;
                    color: rgba(0, 0, 0, .6);
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

    .van-popup {
        height: 60%;
        width: 100%;
    }
</style>
