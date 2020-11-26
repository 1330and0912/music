<template>
        <div id="recommend">
            <div class="scroll-wrap">
                <swipe/>
                <van-list
                        :class="this.$store.state.isShowPlayBar?'bottom-padding':''"
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                        :immediate-check="false"
                        offset="1"
                >
                    <van-sticky :offset-top="47">
                        <div class="category">
                <span
                        @click="changeTab(index)"
                        :class="index==currentIndex?'current-index':''" :key="index"
                        class="category-item"
                        v-for="(item,index) in categoryList">
                    {{item}}
                </span>
                        </div>
                    </van-sticky>

                    <recommend-list :data-list="mvList[this.currentIndex][this.categoryList[this.currentIndex]]"/>
                </van-list>
            </div>
        </div>

</template>

<script>
    import {getAllMV} from "../../api";
    import RecommendList from "./childComponents/RecommendList";
    import Swipe from "../profile/childComponents/Swipe";
    import Loading from "../../components/common/loading/Loading";

    export default {
        name: "Recommend",
        components: {Loading, Swipe, RecommendList},
        data() {
            return {
                categoryList: ['内地', '港台', '欧美', '日本', '韩国'],
                currentIndex: 0,
                loading: false,
                finished: false,
                limit: 10,
                hasMore: true,
                mvList: [
                    {
                        '内地': [], offset: 0
                    },
                    {
                        '港台': [], offset: 0
                    },
                    {
                        '欧美': [], offset: 0
                    },
                    {
                        '日本': [], offset: 0
                    },
                    {
                        '韩国': [], offset: 0
                    },
                ]

            }
        },
        methods: {
            async getAllMVData() {
                let offset = this.mvList[this.currentIndex].offset * this.limit
                let keyWord = this.categoryList[this.currentIndex]
                const res = await getAllMV(this.limit, offset, keyWord)
                this.hasMore = res.hasMore
                this.mvList[this.currentIndex][keyWord].push(...res.data.filter(item => item.cover))
                this.loading = false
                this.mvList[this.currentIndex].offset++
                this.finished = !this.hasMore
            },
            onLoad() {
                if (this.mvList[this.currentIndex][this.categoryList[this.currentIndex]].length !== 0) {
                    this.getAllMVData()
                }
            },
            changeTab(index) {
                this.currentIndex = index
                if (this.mvList[this.currentIndex][this.categoryList[this.currentIndex]].length == 0) {
                    console.log(this.mvList[this.currentIndex][this.categoryList[this.currentIndex]].length);
                    this.getAllMVData()
                }
            },
        },
        created() {
            this.getAllMVData()
        },
        mounted() {
            console.log(1);
        }
    }
</script>

<style lang="less" scoped>
    .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-leave-to {
        position: fixed;
        opacity: 0;
        z-index: 99;
        width: 100%;
    }

    .scroll-wrap {
        overflow: scroll;
        height: 100%;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }

    #recommend {
        height: 100%;
        padding-top: 45px;
    }

    .category {
        display: flex;
        justify-content: space-between;
        height: 43px;
        width: 100%;
        padding: 0 20px;
        line-height: 30px;
        margin: 0 auto;
        align-items: center;
        background-color: white;

        .category-item {
            padding: 0 6px;
            transition: border-bottom-color .5s;
        }
    }

    .current-index {
        border-bottom: 4px solid #FF3A3A;
        font-weight: bold;
        border-radius: 4px;
    }
</style>
