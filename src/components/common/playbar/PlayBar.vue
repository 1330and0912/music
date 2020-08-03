<template>
    <div id="playBar" :style="{bottom:getIsPlay?'0':'-49px'}">
        <div class="music-info">
            <img :src="getCurrentMusic.bg" alt="">
            <p class="music-name">
                {{getCurrentMusic.songName}}
            </p>
        </div>
        <div class="music-control">
            <i @click="togglePlayState" class="play iconfont" :class="getIsPlay?'icon-bofang':'icon-bofang1'"></i>
            <i class="play iconfont icon-zhankai"></i>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "PlayBar",
        computed: {
            ...mapGetters('musicDetail', ['getCurrentMusic', 'getIsPlay'])
        },
        methods: {
            togglePlayState() {

            }
        }

    }
</script>

<style lang="less" scoped>
    #playBar {
        border-top-left-radius: 7px;
        border-top-right-radius: 7px;
        color: #f5f2f0;
        width: 100%;
        position: fixed;
        bottom: -49px;
        height: 49px;
        background-image: linear-gradient(90deg,
        rgba(0, 2, 0, 1),
        rgba(0, 0, 0, .5),
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
                font-size: 14px;
            }

            img {
                height: 35px;
                width: 35px;
                border-radius: 50%;
                margin-right: 10px;
                animation: move 6s infinite linear;
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
