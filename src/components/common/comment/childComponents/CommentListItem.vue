<template>
    <div class="comment-list-item">
        <div class="h">
            <div class="ava">
                <div class="name">
                    <img :src="comment.avatarUrl" alt="">
                    <div class="nickname">
                        {{comment.nickname}}
                    </div>
                    <div class="create-time">
                        {{comment.time | formatDate}}
                    </div>
                </div>
                <div class="liked">
                    {{comment.likedCount}}
                    <i class="iconfont icon-aixin"></i>
                </div>
            </div>
            <div class="content">
               <ul>
                   <li v-for="item in formatContent">
                       {{item}}
                   </li>
               </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentListItem",
        props: {
            comment: {
                type: Object,
                default: () => ({})
            }
        },
        filters: {
            formatDate(value) {
                let date = new Date(value)
                let m = date.getMonth() + 1
                let d = date.getDate()
                return `${m}-${d}`
            }
        },
        computed: {
            formatContent() {
               const content =  this.comment.content.split('\n')
                return content
            }
        }
    }
</script>

<style lang="less" scoped>
    .h {
        .ava {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .name {
                display: flex;
                justify-content: space-between;
                align-items: center;

                img {
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    margin-right: 6px;
                }

                .nickname,.create-time{
                    font-size: 14px;
                    color: #000;

                }
                .create-time {
                    margin-left: 10px;
                    color: rgba(0,0,0,.6);
                }

            }



            .liked {
                i {
                    color: #DD4A68;
                }
            }
        }
        .content {
            padding: 0 0px 0 36px;
            li {
               /*padding: 10px 0;*/
                line-height: 160%;
            }
        }
    }
    .comment-list-item {
        padding-bottom: 5px;
        border-bottom: 1px solid rgba(0,0,0,.08);
        margin-bottom: 20px;
    }
</style>
