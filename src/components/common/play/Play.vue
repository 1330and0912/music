<template>
    <div id="play" :style="{backgroundImage:`url(${getCurrentMusic.bg})`}">
        <div class="nav-bar">
            <i @click="back" class="iconfont icon-zuojiantou"></i>
            <span>{{getCurrentMusic.songName}}-{{getCurrentMusic.author}}</span>
        </div>
        <record :is-rotate="getIsPlay" :bg="getCurrentMusic.bg"/>
        <lyric-detail :lyric="getCurrentMusic.lyric" class="lyric"></lyric-detail>
        <progress-bar/>
        <music-control class="control"/>
    </div>
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
        methods: {
            back() {
                this.$router.back()
            }
        },
        computed:{
            ...mapGetters('musicDetail',['getCurrentMusic','getIsPlay'])
        }
    }
</script>

<style lang="less" scoped>
    #play {
        transition: all .3s;
        background-color: #cccccc;
        height: 100%;
        width: 100%;
        color: white;
        background-image: url("../../../assets/img/profile/private.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        &::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.7);
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
