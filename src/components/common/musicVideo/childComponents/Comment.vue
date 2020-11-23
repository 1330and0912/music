<template>
    <div class="comment">
        <main-comment :comment-data="commentData">
            <template slot="header">
                <div class="h" >
                    精彩评论
                </div>
            </template>

        </main-comment>
    </div>
</template>

<script>
    import MainComment from "../../comment/MainComment";
    export default {
        name: "Comment",
        components: {MainComment},
        props:{
            commentData:{
                type:Array,
                default:()=>[]
            }
        }
    }
</script>

<style lang="less" scoped>
    .comment {
        background-color: white;
        padding: 10px;
    }
  .h {
      font-weight: bold;
      margin-bottom: 10px;
  }
</style>
