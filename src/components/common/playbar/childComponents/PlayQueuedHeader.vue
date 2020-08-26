<template>
    <div class="play-queued-header">
        <strong>当前播放</strong>
        <span class="count">({{getPlayQueuedData.length}})</span>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "PlayQueuedHeader",
        computed:{
            ...mapGetters('musicDetail',['getPlayQueuedData']),

        }
    }
</script>

<style scoped>
    .play-queued-header{
        padding: 15px 20px 0;
    }
    .count {
        margin-left: 3px;
    }
</style>
