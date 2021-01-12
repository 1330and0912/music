<template>
    <transition name="slide-down">
        <div @click="toogleShow" v-if="Object.keys(getCurrentMusic).length" id="play">
            <div class="bef" :style="{backgroundImage:`url(${getCurrentMusic.bg}?param=50y50)`}"></div>
            <div class="nav-bar">
                <i @click="back" class="iconfont icon-zuojiantou"></i>
                <span>{{getCurrentMusic.author}}-{{getCurrentMusic.songName}}</span>
            </div>
            <record :class="showRec?'opa':''" :is-rotate="getIsPlay" :bg="getCurrentMusic.bg"/>
            <lyric-detail :class="showLrc?'opa':''"  :lyric="getCurrentMusic.lyric" class="lyric"></lyric-detail>
            <progress-bar/>
            <music-control :id="getCurrentMusic.id" class="control"/>
        </div>
    </transition>
</template>

<script>
    import Record from "./Record";
    import LyricDetail from "./LyricDetail";
    import MusicControl from "./MusicControl";
    import ProgressBar from "./ProgressBar";

    import PhoneNavBar from "views/login/childcomponents/PhoneNavBar";

    import {mapGetters} from 'vuex'

    export default {
        name: "Play",
        components: {ProgressBar, PhoneNavBar, MusicControl, LyricDetail, Record},
        data() {
            return {
                showRec: false,
                showLrc: true
            }
        },
        methods: {
            back() {
                this.$router.back()
            },
            toogleShow(e){
                if(e.target.className=='bef' ||e.target.className=='record-bg' ||e.target.className=='lyric'){
                    this.showRec=!this.showRec
                    this.showLrc=!this.showLrc
                }
            }
        },
        computed: {
            ...mapGetters('musicDetail', ['getCurrentMusic', 'getIsPlay'])
        },
        beforeRouteUpdate(to) {
        }
    }
</script>

<style lang="less" scoped>
    .opa{
        opacity:0;
    }

    .slide-down-leave-to {
        position: fixed !important;
    }

    .slide-down-leave-active {
        opacity: 0;
        transition: all  1s !important;
        transform: translateY(100%);
    }

    #play {
        padding-bottom: 100px;
        position: relative;
        z-index: 999;
        transition: font-size .3s;
        background-color: #cccccc;
        height: 100%;
        width: 100%;
        color: white;

        .bef {
            filter: blur(80px);
            position: absolute;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

            &:before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .4);
            }
        }


        .nav-bar {
            position: relative;
            z-index: 999;
            height: 44px;
            line-height: 44px;
            padding-left: 20px;
            display: flex;
            align-items: center;

            i {
                font-size: 24px;
            }

            span {
                width: 200px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 16px;
                margin-left: 10px;
            }
        }
    }

    .lyric {
        margin-top: 20px;
    }

    .control {
        padding: 0 30px;
        position: fixed;
        bottom: 10px;
    }
</style>
