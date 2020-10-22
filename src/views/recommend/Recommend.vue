<template>
    <div id="recommend">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
                immediate-check
        >
            <recommend-list :data-list="mvList"/>

        </van-list>
    </div>
</template>

<script>
    import {getAllMV} from "../../api";
    import RecommendList from "./childComponents/RecommendList";

    export default {
        name: "Recommend",
        components: {RecommendList},
        data() {
            return {
                loading:false,
                finished:false,
                mvList: [],
                offset: 1,
                limit: 20,
                count: 0,
                hasMore: true

            }
        },
        methods: {
            async getAllMVData() {
                const res = await getAllMV(this.limit, this.offset * this.limit)
                this.count = res.count
                this.hasMore = res.hasMore
                this.mvList = res.data.filter(item => item.cover)
                console.log(res);
            },
            onLoad(){
                console.log(123);
            }
        },
        created() {
            this.getAllMVData()
        }
    }
</script>

<style lang="less" scoped>
    #recommend {
        height: 100%;
        padding-top: 50px;
    }
</style>
