<template>
    <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''"  class="search-referral">
        <search-history/>
        <search-hot-detail/>
    </div>
</template>

<script>
    import SearchHistory from "./childComponents/SearchHistory";
    import SearchHotDetail from "./childComponents/SearchHotDetail";

    export default {
        name: "SearchReferral",
        components: {SearchHotDetail, SearchHistory}
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 49px!important;
    }
</style>
