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
        width: 100%;
        height: 100%;
        background-color:@content-color;
    }

</style>
