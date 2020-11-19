<template>
    <transition name="fade">
        <div id="search">
            <search-input/>
            <keep-alive>
                <router-view/>
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
    .fade-enter-active, .fade-leave-active {
        transition: all .3s linear;
    }
    .fade-leave-to  {
        transform: translateX(400px);
        opacity: 0;

    }
    .fade-enter{
        transform: translateX(400px);
        opacity: .5;
    }
</style>
