<template>
    <div id="app">
        <keep-alive>
            <nav-bar :path="path" v-if="isShowNavBar" :titles="['我的','最近播放','分类','视频']"/>
        </keep-alive>
        <keep-alive>
            <router-view/>
        </keep-alive>
        <loading v-show="$store.state.isShowLoading"/>
        <template v-if="removePlayBar ">
            <play-bar v-show="this.$store.state.isShowPlayBar"/>
        </template>
    </div>
</template>
<script>
    import NavBar from "./components/common/NavBar";
    import PlayBar from "./components/common/playbar/PlayBar";

    import {mapGetters, mapActions} from 'vuex'
    import Loading from "./components/common/loading/Loading";

    export default {
        components: {Loading, PlayBar, NavBar},
        data() {
            return {
                isShowNavBar: false,
                path: ['/profile', '/recent', '/category', ''],
                removePlayBar: true
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
                let flag1 = ['/play', '/login', '/phoneVerify', '/phoneRegister', '/nickName', '/passwordVerify']
                let f = flag1.some(item => to.path.includes(item))
                if (f || (!(Object.keys(this.getCurrentMusic).length))) {
                    this.$store.state.isShowPlayBar = false
                } else {
                    this.$store.state.isShowPlayBar = true
                }
            },
            getCurrentMusic() {
                this.$store.state.isShowPlayBar = !!(Object.keys(this.getCurrentMusic).length);
                if (this.$route.path.includes('/play')) {
                    this.$store.state.isShowPlayBar = false
                }
            },
            getPlayQueuedData(newVal) {
                if (newVal.length == 0) {
                    this.removePlayBar = false
                    this.setCurrentMusic({})
                } else {
                    this.removePlayBar = true
                }
            }
        }
        ,
        computed: {
            ...mapGetters('musicDetail', ['getIsPlay', 'getCurrentMusic', 'getPlayQueuedData'])
        }
        ,
        created() {
            if (window.localStorage.currentMusic) {
                this.setCurrentMusic(JSON.parse(window.localStorage.currentMusic))
            } else {
                this.$store.state.isShowPlayBar = false
            }
            this.getInitData()
        }
        ,
        methods: {
            ...
                mapActions('musicDetail', ['setCurrentMusic', 'writePlayQueuedData']),
            //获取一些localStorage数据
            getInitData() {
                // 获取播放队列数据
                window.localStorage.playQueuedData && this.writePlayQueuedData(JSON.parse(window.localStorage.playQueuedData))
            }
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
