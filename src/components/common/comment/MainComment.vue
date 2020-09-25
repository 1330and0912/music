<template>
    <div id="mainComment">
        <template>
            <slot name="header">
                asd
            </slot>
        </template>
        <comment-list :comment-data="commentData"/>
    </div>
</template>

<script>
    import CommentList from "./childComponents/CommentList";
    export default {
        name: "MainComment",
        components: {CommentList},
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
