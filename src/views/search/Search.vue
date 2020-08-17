<template>
    <div id="search">
        <search-input/>
        <keep-alive>
            <router-view/>
        </keep-alive>
    </div>
</template>

<script>
    import SearchInput from "./childComponents/SearchInput";



    export default {
        name: "Search",
        components: {SearchInput},


    }
</script>

<style lang="less" scoped>
    #search {

    }
</style>
