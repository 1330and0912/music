<template>
    <div class="music-list">
        <music-list-item :key="item.id" :music-info="item" id="item.id" v-for="item in musicInfo"/>
    </div>
</template>

<script>
    import MusicListItem from "./MusicListItem";

    export default {
        name: "MusicList",
        components: {MusicListItem},
        props: {
            musicInfo: {
                type: Array,
                default: () => []
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    .music-list {
        overflow-y: scroll;
        width: 100%;
        height: 100%;
    }
</style>
