<template>
    <transition name="fade">
        <div id="search">
            <search-input/>
            <div class="search-wrapper">
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </div>

        </div>
    </transition>
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
        background-color: @content-color;
        position: relative;
        z-index: 101;
    }

    .search-wrapper {
        height: calc(100% - 49px);
        overflow: scroll;
    }

     .fade-leave-active {
        transition: all .5s ease-out;
    }

    .fade-leave-to {
        position: fixed !important;
        z-index: 9999;
        transform: translateX(100%);
    }
</style>
