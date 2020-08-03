<template>
    <div id="play">
        <div class="nav-bar">
            <i class="iconfont icon-zuojiantou"></i>
            <span>单车</span>
        </div>
        <record/>
        <lyric-detail class="lyric"></lyric-detail>
        <music-control class="control"/>
    </div>
</template>

<script>
    import Record from "./Record";
    import LyricDetail from "./LyricDetail";
    import MusicControl from "./MusicControl";

    import PhoneNavBar from "views/login/childcomponents/PhoneNavBar";

    export default {
        name: "Play",
        components: {PhoneNavBar, MusicControl, LyricDetail, Record},
        props: {

        }
    }
</script>

<style lang="less" scoped>
    #play {
        background-color: #cccccc;
        height: 100%;
        width: 100%;
        color: white;
        background-image: url("../../../assets/img/profile/private.jpg");
        background-repeat: no-repeat;
        background-size: cover;

        &::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .nav-bar {
            position: relative;
            z-index: 999;
            height: 44px;
            line-height: 44px;
            padding-left: 20px;

            i {
                font-size: 24px;
            }

            span {
                font-size: 20px;
                margin-left: 24px;
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
