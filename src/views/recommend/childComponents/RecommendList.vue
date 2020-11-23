<template>
    <div class="recommend-list">
        <recommend-list-item
                ref="item"
                :key="item.id"
                v-for="(item,index) in dataList"
                :value="item"
        />
    </div>
</template>

<script>
    import RecommendListItem from "./RecommendListItem";

    export default {
        name: "RecommendList",
        components: {RecommendListItem},
        props: {
            dataList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {}
        },
        watch: {},
        methods: {}
    }
</script>

<style lang="less" scoped>
    .recommend-list {
        background-color: white;
        padding: 10px 10px 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
