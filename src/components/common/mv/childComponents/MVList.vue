<template>
    <div class="mv-list">
        <m-v-list-item :mv="item" :key="item.id" v-for="item in mvData"/>
    </div>
</template>

<script>
    import MVListItem from "./MVListItem";

    export default {
        name: "MVList",
        components: {MVListItem},
        props: {
            mvData: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
    .mv-list {
        height: calc(100% - 30px);
        overflow: scroll;
    }
</style>
