<template>
    <div class="musci-control">
        <div class="control-wrap">
            <div @click="playMode" class="circulation">
                <i class="iconfont   " :class="playModeIcon[getPlayMode]"></i>
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
                <collect :id="id" @collect="collectMusic"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapState} from 'vuex'
    import Collect from "../Collect";
    import {getLikeList, likeMusic} from "../../../api";

    export default {
        name: "MusicControl",
        components: {Collect},
        props: ['id'],
        data() {
            return {
                playModeIcon: ['icon-liebiaoxunhuan', 'icon-danquxunhuan', 'icon-suijibofang'],
                playModeText: ['列表循环', '单曲循环', '随机播放'],
                modeIndex: 0,//模式索引
                isCollect: false
            }
        },
        computed: {
            ...mapGetters('musicDetail', ['getIsPlay', 'getPlayMode', 'getCurrentMusic']),
            ...mapState('login', ['uid']),
            ...mapState('collect', ['ids']),
        },
        methods: {
            ...mapActions('musicDetail', ['toggleMusicState', 'prevSong', 'nextSong', 'alterPlayMode']),
            ...mapActions('collect', ['saveIds', 'saveLikeMusic','cancelLikeMusic']),
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
                this.alterPlayMode(this.modeIndex)
                this.$toast(this.playModeText[this.getPlayMode])
            },
            //喜欢音乐
            async collectMusic() {
                this.isCollect = this.ids.some(item => item == this.id)
                if (!this.isCollect) {
                    likeMusic(this.id).then(res => {
                        if (res.code == 200) {
                            console.log(res);
                            this.saveIds(this.id)
                            this.saveLikeMusic(this.getCurrentMusic)
                            this.$toast('收藏成功')
                        }
                    })
                } else {
                    likeMusic(this.id,false).then(res => {
                        this.cancelLikeMusic(this.id)
                        this.$toast('取消成功')
                    })
                }

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


            i {
                font-size: 28px;
            }
        }


    }
</style>
