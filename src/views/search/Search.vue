<template>
    <transition name="fade">
        <div id="search">
            <search-input/>
            <keep-alive>
                <div class="serach-wrapper">
                    <router-view/>
                </div>
            </keep-alive>
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

    .serach-wrapper {
        height: calc(100% - 49px);
        overflow: scroll;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .3s linear;
    }

    .fade-leave-to {
        position: fixed;
        z-index: 9999;
        opacity: 0;
        transform: translateX(100%);

    }

    .fade-enter {
        opacity: .5;
    }
</style>
