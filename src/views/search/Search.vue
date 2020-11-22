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
    }

    .search-wrapper {
        height: calc(100% - 49px);
        overflow: scroll;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease-out;
    }

    .fade-leave-to {
        position: fixed;
        z-index: 9999;
        transform: translateX(100%);

    }
</style>
