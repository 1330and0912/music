<template>
    <div class="play-queued">
        <play-queued-header/>
        <play-queued-control/>
        <play-queued-list/>
    </div>
</template>

<script>
    import PlayQueuedHeader from "./childComponents/PlayQueuedHeader";
    import PlayQueuedControl from "./childComponents/PlayQueuedControl";
    import PlayQueuedList from "./childComponents/PlayQueuedList";
    export default {
        name: "PlayQueued",
        components: {PlayQueuedList, PlayQueuedControl, PlayQueuedHeader}
    }
</script>

<style lang="less" scoped>
    .play-queued {
        height: 100%;
    }
</style>
