<template>
    <ul class="nav-bar" :style="{backgroundColor:bgColor}">
        <li @click="openSet">
            <i class="iconfont icon-zhankai"></i>
        </li>
        <li
                :style="{color:color}"
                @click="changeTab(index)"
                class="nav-bar-item" :class="
                index===currentIndex?`current`:''"
                v-for="(item,index) in titles">
            {{item}}
        </li>
        <li @click="toSearch">
            <i class="iconfont icon-sousuo"></i>
        </li>
        <van-popup v-model="showPopup" position="left" :style="{ height: '100%',width:'90%' }">
            <main-set />
        </van-popup>
    </ul>
</template>

<script>
    import {mapState} from 'vuex'
    import MainSet from "./set/MainSet";

    export default {
        name: "NavBar",
        components: {MainSet},
        props: {
            titles: {
                type: Array,
                default: () => []
            },
            path: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                currentIndex: 0,
                bgColor: 'transparent',
                color: 'darkgrey',
                showPopup: false
            }
        },
        created() {
            if (this.$route.path == '/recent') {
                this.bgColor = '#CC0033'
                this.color = 'white'
                this.currentIndex = 1
            } else if (this.$route.path == '/category') {
                this.bgColor = '#CC0033'
                this.currentIndex = 2
                this.color = 'white'
            } else if (this.$route.path == '/recommend') {
                this.bgColor = '#CC0033'
                this.color = 'white'
                this.currentIndex = 3
            }
        },
        computed: {
            ...mapState('login', ['isLogin'])

        },
        watch: {
            $route(newVal) {
                if ('/profile' == newVal.path) {
                    this.bgColor = 'transparent'
                    this.color = 'darkgrey'
                    this.currentIndex = 0
                }
            }
        },
        methods: {
            changeTab(index) {

                if (this.$route.path !== this.path[index]) {
                    if (this.path[index] == '/recent') {
                        if (!this.isLogin) {
                            this.$router.push('login')
                            // this.bgColor = 'transparent'
                            // this.color = 'darkgrey'
                            // this.currentIndex = 0
                            return 0
                        }
                    }
                    this.$router.push(this.path[index])
                    this.currentIndex = index
                }
                if (index != 0) {
                    this.bgColor = '#CC0033'
                    this.color = 'white'

                } else {
                    this.bgColor = 'transparent'
                    this.color = 'darkgrey'
                }

            },
            toSearch() {
                this.$router.push('search')
            },
            // 打开左侧设置栏
            openSet() {
                this.showPopup = true
            }
        }
    }
</script>

<style lang="less" scoped>
    .nav-bar {
        width: 100%;
        display: flex;
        align-items: center;
        position: fixed;
        z-index: 999999;
        top: 0px;
        height: 49px;
        left: 0;
        right: 0;

        //background-color: rgba(1,111,1,.3);
        li {
            font-size: 16px;
            text-align: center;
            flex-grow: 1;
            color: white;
        }

        .iconfont {
            line-height: 44px;
            padding: 0;
            font-size: 20px;
            color: white;

        }

        .icon-sousuo {
            font-size: 30px;
        }
    }

    .current {
        font-weight: bold !important;
        font-size: 18px !important;
        color: white !important;
    }

</style>
