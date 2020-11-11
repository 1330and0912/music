<template>
    <div class="drop-down-menu">
        <van-dropdown-menu class="fixed">
            <van-dropdown-item @change="changeCategory" v-model="area" :options="option1"/>
            <van-dropdown-item @change="changeCategory" v-model="type" :options="option2"/>
        </van-dropdown-menu>
        <van-list
                :immediate-check="false"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <category-list :category-list="categoryList"/>
        </van-list>
    </div>
</template>

<script>
    import {getCategoryList} from "../../../api";
    import CategoryList from "./CategoryList";

    export default {
        components: {CategoryList},
        data() {
            return {
                loading: false,
                finished: false,
                offset: 0,
                area: 7,
                type: 1,
                option1: [
                    {text: '华语', value: 7},
                    {text: '欧美', value: 96},
                    {text: '日本', value: 8},
                    {text: '韩国', value: 16},
                    {text: '其他', value: 0},
                ],
                option2: [
                    {text: '男歌手', value: 1},
                    {text: '女歌手', value: 2},
                    {text: '乐队/组合', value: 3},
                ],
                categoryList: [],
                count: 0
            }
        },
        watch: {},
        methods: {
            async changeCategory(value, isClear = true, resetOffset = true) {
                isClear && (this.categoryList = [])
                if (resetOffset) {
                    this.offset = 0
                } else {
                    this.offset++
                }
                const res = await getCategoryList(this.area, this.type, 30, this.offset * 30)
                res.artists.forEach(item => {
                    let {name, picUrl, followed, id} = item
                    this.categoryList.push({name, id, picUrl, followed})
                })
                this.loading = false
                console.log(resetOffset);
            },
            //加载更多
            onLoad() {
                this.changeCategory(1, false, false)
                console.log('load');
            }
        },
        created() {
            this.changeCategory(1, false, true)
        }
    }
</script>

<style lang="less" scoped>
    .fixed {
        position: fixed;
        top: 47px;
        left: 0;
        right: 0;
        z-index: 999;
    }
    .drop-down-menu{
        height: 100%;
        overflow-y: scroll;
    }
</style>
