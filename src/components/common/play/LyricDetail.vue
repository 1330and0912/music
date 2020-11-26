<template>
    <div @touchend="touchend" ref="scroll" class="lyric-detail">
        <div class="scroll-wrap">
            <p ref="lyricHeight" :class="index==activeIndex?'heightd':''" class="lyric" v-for="(item,index) in lyrics">
                {{item.lyricStr}}
            </p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "LyricDetail",
        props: {
            lyric: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                moveHeight: 0,
                scrollTop: 0,
                lyricTotalHeight: 0,//歌词高度
                lyricCount: 0,//已滚动的歌词
                timer: null
            }
        },
        computed: {
            ...mapGetters('musicDetail', ['getCurrentMusicPlayTime', 'getProgressValue']),
            activeIndex() {
                let t = 0
                let flag = this.lyrics.some((item, index) => {
                    t = index
                    return item.duration >= this.getCurrentMusicPlayTime
                })
                if (t == 0) return 0
                if (t == this.lyrics.length) return this.lyrics.length - 1
                return flag ? t - 1 : this.lyrics.length - 1
            },
            lyrics() {
                if (!this.lyric.length) return [{
                    lyricStr: '暂无歌词',
                    duration: 1
                }]
                return this.lyric.filter(item => {
                    return item.lyricStr !== ''
                })
            }
        },
        watch: {
            activeIndex(newVal) {
                if(this.$refs.lyricHeight[this.activeIndex]) {
                    if (this.$refs.lyricHeight[this.activeIndex].clientHeight * newVal >= this.$refs.scroll.clientHeight / 2) {
                        this.$nextTick(() => {
                            this.moveHeight = this.$refs.lyricHeight[this.activeIndex].clientHeight
                            this.$refs.scroll.scrollTop = this.$refs.scroll.scrollTop + this.moveHeight
                        })
                    } else {
                        this.$refs.scroll.scrollTop = 0
                    }
                    this.lyricCount = newVal
                }

            },
            lyrics() {
                //切换歌曲则重置滚动
                this.$refs.scroll.scrollTop = 0
                this.lyricTotalHeight = 0
            },
            getProgressValue() {
                this.totalHeight(1)
            }
        }
        ,
        activated() {
            this.totalHeight()
        },
        methods: {
            touchend(e) {
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.totalHeight()
                }, 2000)
            },
            totalHeight(i = 0) {
                this.lyricTotalHeight = 0
                for (; i < this.lyricCount; i++) {
                    this.lyricTotalHeight += this.$refs.lyricHeight[i].clientHeight
                }
                window.sessionStorage.scrollTop =
                    this.lyricTotalHeight -
                    (this.$refs.scroll.clientHeight - this.$refs.lyricHeight[0].clientHeight) / 2
                this.$refs.scroll.scrollTop = window.sessionStorage.getItem('scrollTop')
            }
        }

    }
</script>

<style lang="less" scoped>
    .heightd {
        color: white !important;
        font-size: 18px !important;
        text-shadow: 1px 1px 11px skyblue;
    }

    .lyric-detail {
        transition: all 1s;
        position: relative;
        z-index: 999;
        width: 100%;
        height: calc(100% - 400px);
        overflow: scroll;

        .lyric {
            font-size: 15px;
            transition: all .5s;
            padding: 10px 0;
            text-align: center;
            color: rgba(255, 255, 255, .6);
        }

    }
</style>
