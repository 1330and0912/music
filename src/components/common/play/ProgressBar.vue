<template>
    <div ref="progressBarWarp" class="progress-bar">
        <div class="progress-bar-wrap">
            <div class="current-time">{{getCurrentMusicPlayTime|filterPlayTime}}</div>
            <div @click="setCurrentTime" class="bar" ref="bar">
                <div ref="rate" class="rate"></div>
                <div ref="point" class="point"></div>
            </div>
            <div class="end-time">{{getDuration|filterPlayTime}}</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "ProgressBar",
        computed: {
            ...mapGetters('musicDetail', ['getCurrentMusicPlayTime', 'getDuration'])
        },
        filters: {
            filterPlayTime(value) {
                let m = value / 60 < 10 ? `0${parseInt(value / 60)}` : parseInt(value / 60)
                let s = value % 60 < 10 ? `0${parseInt(value % 60)}` : parseInt(value % 60)
                return `${m}:${s}`
            }
        },
        watch: {
            getCurrentMusicPlayTime(newVal) {
                let ratio = newVal / this.getDuration
                this.$refs.rate.style.width = this.$refs.bar.clientWidth * ratio + 'px'
                this.$refs.point.style.left = this.$refs.rate.clientWidth - this.$refs.point.clientWidth / 2 + 'px'
            }
        },
        mounted() {
            // console.log(this.$refs.rate.clientWidth);
            // console.log(this.$refs.bar.clientWidth);
            // let ratio = this.$refs.bar.clientWidth
            // this.getDuration
        },
        activated() {
            //console.log(123124);
        },
        methods: {
            ...mapActions('musicDetail', ['setProgressValue']),
            setCurrentTime(e) {
                let ratio = (e.clientX - this.$refs.progressBarWarp.offsetLeft - this.$refs.bar.offsetLeft) / this.$refs.bar.clientWidth
                let currentTime = ratio * this.getDuration
                if (currentTime < 0) {
                    currentTime = 0
                } else if (currentTime > this.getDuration) {
                    currentTime = this.getDuration
                }
                this.setProgressValue(currentTime)
            }
        }
    }
</script>

<style lang="less" scoped>
    .progress-bar {
        position: relative;
        z-index: 1111;
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
                background-color: #336699;
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
