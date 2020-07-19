<template>
    <div id="play">
        <record/>
        <lyric-detail></lyric-detail>
    </div>
</template>

<script>
    import Record from "./Record";
    import LyricDetail from "./LyricDetail";
    export default {
        name: "Play",
        components: {LyricDetail, Record}
    }
</script>

<style scoped>

</style>
