<template>
    <transition name="slide-right">
        <div class="detail">
            <nav-header :title="playlist[0].name" class="nav"/>
            <template v-if="playlist[0].detail.length">
                <music-list :is-show-loading-props="false" :music-info="playlist[0].detail "/>
            </template>
            <template v-else>
                <div class="null">
                    <div class="text">
                        歌单里没有歌曲
                    </div>
                    <div class="btn">添加歌曲</div>
                </div>
            </template>
        </div>
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex'
    import MusicList from "../../../components/common/musicList/MusicList";
    import NavHeader from "../../../components/common/NavHeader";

    export default {
        name: "UserPlaylistDetail",
        components: {NavHeader, MusicList},
        props: ['name'],
        computed: {
            ...mapGetters('userPlayList', ['getUserPlaylistByName']),
            playlist() {
                return this.getUserPlaylistByName(this.name)
            }
        }

    }
</script>

<style lang="less" scoped>
    .nav {
        background-color:#FF3A3A;
        width: 100%;
        margin-top: 0;
    }

    .slide-right-leave-to {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        transform: translateX(100%);
        opacity: 0.5;
    }

    .slide-right-leave-active {
        position: absolute;
        z-index: 300;
        transition: all .5s;
    }

    .detail {
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        background-color: #F7F7F7;
        overflow-y: scroll;
        padding-top: 48px;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }

    .null {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);

        .text {
            color: black;
            width: 150px;
            font-size: 14px;
            margin-bottom: 30px;
            text-align: center;
        }

        .btn {
            width: 150px;
            text-align: center;
            line-height: 35px;
            height: 35px;
            border-radius: 30px;
            background-color: #FF3A3A;
            color: white;
        }
    }
</style>
