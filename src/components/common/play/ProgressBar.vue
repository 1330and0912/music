<template>
    <div ref="progressBarWarp" class="progress-bar">
        <div class="progress-bar-wrap">
            <div class="current-time">{{getCurrentMusicPlayTime|filterPlayTime}}</div>
            <van-slider @drag-start="sliderChange" @change="progressChange" active-color="#FFffff" inactive-color="#666"
                        :max="getDuration"
                        v-model="value">
                <template #button>
                    <div class="custom-button">
                        <div v-show="showCurrentTime" class="slide-value">{{value|filterPlayTime}}</div>
                    </div>
                </template>
            </van-slider>
            <div class="end-time">{{getDuration|filterPlayTime}}</div>
        </div>
    </div>
</template>


<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "ProgressBar",
        data() {
            return {
                value: 0,
                showCurrentTime: false,
                timer: null,
                autoScroll: true
            }
        },
        computed: {
            ...mapGetters('musicDetail', ['getCurrentMusicPlayTime', 'getDuration'])
        },
        filters: {
            // 歌曲总时长和当前播放时长显示
            filterPlayTime(value) {
                let m = value / 60 < 10 ? `0${parseInt(value / 60)}` : parseInt(value / 60)
                let s = value % 60 < 10 ? `0${parseInt(value % 60)}` : parseInt(value % 60)
                return `${m}:${s}`
            }
        },
        watch: {
            getCurrentMusicPlayTime(newVal) {
                this.autoScroll && (this.value = newVal)
            }
        },

        methods: {
            ...mapActions('musicDetail', ['setProgressValue']),

            // 进度条变化且结束拖动后触发
            progressChange(value) {
                this.showCurrentTime = true
                this.setProgressValue(value)
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.showCurrentTime = false
                }, 2000)
                this.autoScroll = true
            },
            //进度条开始拖动时
            sliderChange(value) {
                clearTimeout(this.timer)
                this.autoScroll = false
                this.showCurrentTime = true
            }
        }
    }
</script>

<style lang="less" scoped>

    .custom-button {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: #FFffff;
        position: relative;

        .slide-value {
            position: absolute;
            content: ' ';
            width: 40px;
            height: 20px;
            top: -25px;
            left: -15px;
        }
    }

    .progress-bar {
        position: fixed;
        height: 40px;
        bottom: 60px;
        left:50%;
        transform: translateX(-50%);
        width: 80%;
        margin: 15px auto 0;
    }

    .progress-bar-wrap {

        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            font-size: 14px;
            color: white;
        }

        .current-time {
            margin-right: 10px;
        }

        .end-time {
            margin-left: 10px;
        }

        .bar {
            position: relative;
            background-color: white;
            height: 2px;
            width: 70%;

            &::after {
                content: ' ';
                width: 13px;
                height: 13px;
                position: absolute;
                left: -3px;
                top: -6px;
            }

            &::before {
                position: absolute;
                right: -3px;
                top: -6px;
                content: ' ';
                width: 13px;
                height: 13px;
            }

            .rate {
                height: 2px;
                background-color: white;
            }

            .point {
                width: 8px;
                height: 8px;
                background-color: #3366CC;
                border-radius: 50%;
                position: absolute;
                top: -3px;
                transition: transform .3s;

                &:active {
                    transform: scale(1.6);
                }
            }
        }


    }
</style>
