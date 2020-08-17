<template>
    <div id="app">
        <keep-alive>
            <nav-bar :path="path" v-if="isShowNavBar" :titles="['我的','最近播放','歌单','视频']"/>
        </keep-alive>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <play-bar v-show="isShowNavBar"/>
        <loading v-if="$store.state.isShowLoading"/>
    </div>
</template>
<script>
    import NavBar from "./components/common/NavBar";
    import PlayBar from "./components/common/playbar/PlayBar";

    import {mapGetters} from 'vuex'
    import Loading from "./components/common/loading/Loading";

    export default {
        components: {Loading, PlayBar, NavBar},
        data() {
            return {
                isShowNavBar: false,
                path: ['/profile', '/recent', '', ''],
            }
        },
        watch: {
            $route(to, from) {
                let flag = this.path.some(item => item == to.path)
                if (flag) {
                    this.isShowNavBar = true
                } else {
                    this.isShowNavBar = flag
                }
                console.log(to.path);
            }
        },
        computed: {
            ...mapGetters('musicDetail', ['getIsPlay'])
        }
    }

</script>
<style>
    @import "assets/css/base.css";

    #app {
        height: 100%;
        width: 100%;
    }


</style>
