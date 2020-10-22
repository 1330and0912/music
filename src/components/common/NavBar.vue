<template>
    <ul class="nav-bar" :style="{backgroundColor:bgColor}">
        <li>
            <i class="iconfont icon-zhankai"></i>
        </li>
        <li
                @click="changeTab(index)"
                class="nav-bar-item" :class="
                index===currentIndex?`current`:''"
                v-for="(item,index) in titles">
            {{item}}
        </li>
        <li @click="toSearch">
            <i class="iconfont icon-sousuo"></i>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "NavBar",
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
                bgColor: 'transparent'
            }
        },
        created() {
            if (this.$route.path == '/recent') {
                this.bgColor = '#1A1E21'
                this.currentIndex = 1
            } else if (this.$route.path == '/category') {
                this.bgColor = '#1A1E21'
                this.currentIndex = 2
            } else if (this.$route.path == '/recommend') {
                this.bgColor = '#1A1E21'
                this.currentIndex = 3
            }
        },
        methods: {
            changeTab(index) {
                this.currentIndex = index
                if (this.$route.path !== this.path[index]) {
                    this.$router.push(this.path[index])
                }
                if (index != 0) {
                    this.bgColor = '#1A1E21'
                } else {
                    this.bgColor = 'transparent'
                }
            },
            toSearch() {
                this.$router.push('search')
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
            color: darkgrey;
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
