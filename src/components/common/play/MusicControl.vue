<template>
    <div class="musci-control">
        <audio
                ref="audio"
                src="http://m7.music.126.net/20200720163520/1fb21e58a4d8d1c08949321cd1b80fa1/ymusic/653f/c445/dea3/d62920d9cd43b3e5fef88e4192f38f4c.mp3">
        </audio>
        <div class="control-wrap">

            <div class="circulation">
                <i class="iconfont icon-suijibofang"></i>
            </div>
            <div class="prev">
                <i class="iconfont icon-shangyiqu"></i>
            </div>
            <div @click="playMusic" class="start">
                <i class="iconfont icon-bofang1"></i>
            </div>
            <div class="next">
                <i class="iconfont icon-xiayiqu"></i>
            </div>
            <div class="more-music">
                <i class="iconfont icon-gengduo"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MusicControl",
        data() {
            return {
                currentTime: 0
            }
        },
        methods: {
            playMusic() {
                this.$refs.audio.play()
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
