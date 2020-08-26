<template>
    <div class="play-queued-control">
        <div class="play-mode">
            <div class="mode"  @click="playMode">
                <i class="iconfont " :class="playModeIcon[getPlayMode]"></i>
                <span class="mode-text">
                {{playModeText[getPlayMode]}}
                </span>
            </div>
            <div class="collect">
                <i class="iconfont icon-shoucang"></i>
                <span>收藏全部</span>
            </div>
            <div class="delete">
                <van-icon @click.native.stop="removeAllQueuedData"  name="delete" size="26" color="#cccccc"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "PlayQueuedControl",
        data() {
            return {
                playModeIcon: ['icon-liebiaoxunhuan', 'icon-danquxunhuan', 'icon-suijibofang'],
                playModeText: ['列表循环', '单曲循环', '随机播放'],
                modeIndex: 0//模式索引
            }
        },
        computed: {
            ...mapGetters('musicDetail', ['getPlayMode'])

        },
        methods: {
            ...mapActions('musicDetail', ['alterPlayMode','writePlayQueuedData']),
            //修改播放模式
            playMode() {
                if (this.modeIndex == 2) {
                    this.modeIndex = 0
                } else {
                    this.modeIndex++
                }
                this.alterPlayMode(this.modeIndex)
            },
            //清空播放队列
            removeAllQueuedData(){
                this.$dialog({
                    title:'‘您确定要清空播放队列吗？ ',
                    showCancelButton:true
                }).then(res => {
                    this.writePlayQueuedData([])
                }).catch(err => {

                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .play-queued-control {
        padding: 15px 20px 10px;
    }

    .play-mode {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .mode {
            flex: 4;
        }
        .collect {
            flex: 4;
            text-align: right;
        }
        .delete {
            flex: 2;
            text-align: right;
        }
        .iconfont {
            font-size: 18px !important;
            color: @night-mode-color;
            margin-right: 2px;
        }
        .van-icon {
            font-size: 22px !important;
        }
        .mode-text {
            font-size: 16px;
        }
    }

</style>
