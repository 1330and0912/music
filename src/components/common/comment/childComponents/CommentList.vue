<template>
    <div class="comment-list">
        <comment-list-item v-for="item in commentData" :key="item.commentId" :comment="item"/>
    </div>
</template>

<script>
    import CommentListItem from "./CommentListItem";
    export default {
        name: "CommentList",
        components: {CommentListItem},
        props:{
            commentData:{
                type:Array,
                default:()=>[]
            }
        }
    }
</script>

<style scoped>

</style>
