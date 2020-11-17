<template>
    <div class="nav-bar-wrap">
        <div class="set" @click="openSet">
            <van-icon name="wap-nav" color="black"/>
        </div>
        <ul class="nav-bar">
            <li
                    @click="changeTab(index)"
                    class="nav-bar-item" :class="
                        index===currentIndex?`current`:''"
                    v-for="(item,index) in titles">
                {{item}}
            </li>
            <van-popup v-model="showPopup" position="left" :style="{ height: '100%',width:'90%' }">
                <main-set/>
            </van-popup>
        </ul>
        <div class="search" @click="toSearch">
            <van-icon name="search" color="black"/>
        </div>
    </div>

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
                showPopup: false
            }
        },
        created() {
            if (this.$route.path == '/discover') {
                this.currentIndex = 1
            } else if (this.$route.path == '/category') {
                this.currentIndex = 2
            } else if (this.$route.path == '/recommend') {
                this.currentIndex = 3
            }
        },
        computed: {
            ...mapState('login', ['isLogin'])
        },
        methods: {
            changeTab(index) {
                if (this.$route.path !== this.path[index]) {
                    if (this.path[index] == '/recent') {
                        if (!this.isLogin) {
                            this.$router.push('login')
                            return 0
                        }
                    }
                    this.$router.push(this.path[index])
                    this.currentIndex = index
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
    .nav-bar-wrap {
        width: 100%;
        display: flex;
        align-items: center;
        position: fixed;
        z-index: 999999;
        top: 0px;
        left: 0;
        right: 0;
        height: 49px;
        /*background-color: #E74A43;*/
        justify-content: space-between;

        .search, .set {
            width: 20%;
            font-size: 26px;
            color: white;
            display: flex;
            align-items: center;
            height: 100%;
            padding-bottom: 3px;
        }

        .set{
            justify-content: flex-start;
            padding-left: 15px;
            padding-bottom: 5px;
        }
        .search{
            justify-content: flex-end;
            padding-right: 15px;
        }


    }

    .nav-bar {
        flex: 6;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-around;
        width: 60%;

        li {
            color: #151419;
            justify-content: space-between;
            transition: all .3s;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            font-size: 15px;
            text-align: center;
            padding: 0 2px 3px;
        }
    }

    //background-color: rgba(1,111,1,.3);


    .current {
        color: black !important;
        font-weight: 700 !important;
        transform: scale(1.2);
        border-bottom: 2px solid red;
    }

</style>
