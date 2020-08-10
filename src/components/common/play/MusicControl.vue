<template>
    <div class="musci-control">
        <div class="control-wrap">

            <div class="circulation">
                <i class="iconfont icon-suijibofang"></i>
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
    import {mapActions,mapGetters} from 'vuex'
    export default {
        name: "MusicControl",
        data() {
            return {
                currentTime: 0
            }
        },
        computed:{
          ...mapGetters('musicDetail',['getIsPlay'])
        },
        methods: {
            ...mapActions('musicDetail',['toggleMusicState','prevSong','nextSong']),
            playMusic() {
                this.toggleMusicState()
            },
            prevMusic(){
                this.prevSong()
            },
            nextMusic(){
                this.nextSong()
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
