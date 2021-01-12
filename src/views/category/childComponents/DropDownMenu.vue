<template>
    <div class="drop-wrap">
        <van-dropdown-menu class="fixed">
            <van-dropdown-item @change="changeCategory" v-model="area" :options="option1"/>
            <van-dropdown-item @change="changeCategory" v-model="type" :options="option2"/>
        </van-dropdown-menu>
        <div class="drop-down-menu" ref="scroll">
            <van-list
                    :immediate-check="false"
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    @load="onLoad"
            >
                <category-list class="list" :category-list="categoryList"/>
            </van-list >
            <back-top ref-name="scroll"/>
        </div>
    </div>
</template>

<script>
    import {getCategoryList} from "../../../api";
    import CategoryList from "./CategoryList";
    import BackTop from "../../../components/common/BackTop";

    export default {
        components: {BackTop, CategoryList},
        data() {
            return {
                loading: false,//ajax请求是否结束
                finished: false,//是否还有下一页数据
                offset: 0,//当前页数
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
            },
            //加载更多
            onLoad() {
                this.changeCategory(1, false, false)
            }
        },
        created() {
            this.changeCategory(1, false, true)
        }
    }
</script>

<style lang="less" scoped>

    .drop-wrap {
        height: 100%;
    }

    .drop-down-menu {
        height: calc(100% );
        overflow-y: scroll;
    }
</style>
