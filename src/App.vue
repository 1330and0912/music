<template>
    <div id="app">
        <nav-bar  :titles="['我的','发现','云村','视频']"/>
        <router-view/>
    </div>
</template>
<script>
    import NavBar from "./components/common/NavBar";

    export default {
        components: {NavBar}
    }

</script>
<style>
    @import "assets/css/base.css";
    #app {
        height: 100%;
        width: 100%;
    }
</style>
