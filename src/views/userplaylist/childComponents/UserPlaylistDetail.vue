<template>
    <transition name="slide-right">
        <div class="detail">
            <music-list :music-info="playlist[0].detail"/>
        </div>
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex'
    import MusicList from "../../../components/common/musicList/MusicList";

    export default {
        name: "UserPlaylistDetail",
        components: {MusicList},
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
    .slide-right-leave-to {
        transform: translateX(33%);
        opacity: 0;
    }

    .slide-right-leave-active {
        position: fixed;
        transition: all .3s;
    }
    .detail{
        width: 100%;
        height: 100%;
        background-color: #F7F7F7;
    }
</style>
