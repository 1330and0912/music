<template>
    <div id="app">
        <keep-alive>
            <nav-bar :path="path" v-if="isShowNavBar" :titles="['我的','发现','歌手','MV']"/>
        </keep-alive>
        <keep-alive>
                <router-view/>
        </keep-alive>
<!--        <loading v-show="$store.state.isShowLoading"/>-->
        <template v-if="removePlayBar ">
            <play-bar v-show="this.$store.state.isShowPlayBar"/>
        </template>
    </div>
</template>
<script>
    import NavBar from "./components/common/NavBar";
    import PlayBar from "./components/common/playbar/PlayBar";

    import {mapGetters, mapActions, mapState} from 'vuex'
    import Loading from "./components/common/loading/Loading";
    import {getLikeList, loginStatus} from "./api/index";

    export default {
        components: {Loading, PlayBar, NavBar},
        data() {
            return {
                isShowNavBar: false,
                path: ['/profile', '/discover', '/category', '/recommend'],
                removePlayBar: true,
                redirectCop: ['/recent', '/favorite-music', '/my-collect']
            }
        },
        watch: {
            isLogin(newVal) {
                if (newVal) {
                    if (window.sessionStorage.getItem('profile')) {
                        loginStatus().then(res => {
                            if (res.code == 200) {
                                window.sessionStorage.setItem('profile', JSON.stringify(res.profile))
                                this.setUid()
                                this.saveLikeMusicIds()
                            }
                        });
                    }
                }
            },
            $route(to, from) {
                if (this.redirectCop.some(item => item == to.path)) {
                    !this.isLogin && this.$router.replace('/login')
                }
                to.path.includes('music-video') && this.getIsPlay && this.toggleMusicState()
                let flag = this.path.some(item => item == to.path)
                if (flag) {
                    this.isShowNavBar = true
                } else {
                    this.isShowNavBar = flag
                }
                let flag1 = ['/play', '/login', '/phoneVerify', '/phoneRegister', '/nickName', '/passwordVerify', '/music-video']
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
            ...mapGetters('musicDetail', ['getIsPlay', 'getCurrentMusic', 'getPlayQueuedData', 'isPlay']),
            ...mapState('login', ['uid', 'isLogin'])
        }
        ,
        created() {
            if (window.sessionStorage.getItem('profile')) {
                this.setLoginStatus(true)
                loginStatus().then(res => {
                    if (res.code == 200) {
                        window.sessionStorage.setItem('profile', JSON.stringify(res.profile))
                        this.setUid()
                        this.saveLikeMusicIds()
                    }
                });
            }


            if (window.localStorage.currentMusic) {
                this.setCurrentMusic(JSON.parse(window.localStorage.currentMusic))
            } else {
                this.$store.state.isShowPlayBar = false
            }
            this.getInitData()

        }
        ,
        methods: {
            ...mapActions('musicDetail', ['setCurrentMusic', 'writePlayQueuedData', 'toggleMusicState']),
            ...mapActions('login', ['setUid','setLoginStatus']),
            ...mapActions('collect', ['saveIds']),
            //获取一些localStorage数据
            getInitData() {
                // 获取播放队列数据
                window.localStorage.playQueuedData && this.writePlayQueuedData(JSON.parse(window.localStorage.playQueuedData))
            },
            async saveLikeMusicIds() {
                let res = await getLikeList(this.uid)
                this.saveIds(res.ids)
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
