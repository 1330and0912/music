<template>
    <ul class="nav-bar">
        <li>
            <i class="iconfont icon-zhankai"></i>
        </li>
        <li
                @click="changeTab(index)"
                class="nav-bar-item" :class="
                index===currentIndex?'current':''"
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
            path: Array
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            changeTab(index) {
                this.currentIndex = index
                if (this.$route.path !== this.path[index]) {
                    this.$router.push(this.path[index])
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
        height: 44px;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, .2);

        li {
            font-size: 16px;
            text-align: center;
            flex-grow: 1;
            color: rgba(255, 255, 255, .7);
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
        font-size: 20px !important;
        color: white !important;
    }
</style>
