<template>
    <div class="musci-control">
        <div class="control-wrap">

            <div @click="playMode" class="circulation">
                <i class="iconfont   " :class="playModeIcon[modeIndex]"></i>
            </div>
            <div @click="prevMusic" class="prev">
                <i class="iconfont icon-shangyiqu"></i>
            </div>
            <div @click="playMusic" class="start">
                <i class="iconfont" :class="getIsPlay?'icon-bofang':'icon-bofang1'"></i>
            </div>
            <div @click="nextMusic" class="next">
                <i class="iconfont icon-xiayiqu"></i>
            </div>
            <div class="more-music">
                <i class="iconfont icon-gengduo"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "MusicControl",
        data() {
            return {
                playModeIcon: ['icon-liebiaoxunhuan', 'icon-danquxunhuan', 'icon-suijibofang'],
                playModeText: ['列表循环', '单曲循环', '随机播放'],
                modeIndex: 0//模式索引
            }
        },
        computed: {
            ...mapGetters('musicDetail', ['getIsPlay'])
        },
        methods: {
            ...mapActions('musicDetail', ['toggleMusicState', 'prevSong', 'nextSong', 'alterPlayMode']),
            //暂停/播放
            playMusic() {
                this.toggleMusicState()
            },
            // 上一曲
            prevMusic() {
                this.prevSong()
            },
            //下一曲
            nextMusic() {
                this.nextSong()
            },
            //修改播放模式
            playMode() {
                if (this.modeIndex == 2) {
                    this.modeIndex = 0
                } else {
                    this.modeIndex++
                }
                this.$toast(this.playModeText[this.modeIndex])
                this.alterPlayMode(this.modeIndex)
            }
        }
    }
</script>

<style lang="less" scoped>
    .musci-control {
        width: 100%;
    }

    .control-wrap {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 auto;
        align-items: center;

        div {
            padding: 10px 10px;

            &:active {
                background-color: rgba(0, 0, 0, .2);
            }

            i {
                font-size: 28px;
            }
        }


    }
</style>
