<template>
    <div class="search-referral">
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

<style scoped>

</style>
