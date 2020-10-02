<template>
    <div :style="{paddingTop:`${h}`}" id="musicVideo">
        <div ref="videoWrap" class="video-wrap">
            <back/>
            <video x5-video-player-type="h5-page" x5-playsinline="" playsinline="" webkit-playsinline="" ref="video"
                   @canplay="playVideo" controls
                   :src="url">
            </video>
        </div>
        <m-v-base-info :offset-top="h" :id="id"/>
        <m-v-related-video :id="id"/>
        <comment :comment-data="commentData"/>
    </div>
</template>

<script>
    import {getMVComment, getMVData, getMVUrl} from "../../../api";
    import Back from "./childComponents/Back";
    import MVBaseInfo from "./childComponents/MVBaseInfo";
    import MVRelatedVideo from "./childComponents/MVRelatedVideo";
    import Comment from "./childComponents/Comment";

    export default {
        name: "MusicVideo",
        components: {Comment, MVRelatedVideo, MVBaseInfo, Back},
        props: ['id'],
        watch: {
            id(newID) {
                this.url = ''
                this.getMVUrlData()
                this.getCommentData()

            }
        },
        data() {
            return {
                url: '',
                isShowBack: true,
                mvData: {},
                h: 0,
                commentData: []
            }
        },
        methods: {
            async getMVUrlData() {
                const res = await getMVUrl(this.id)
                this.url = res.data.url
            },
            playVideo() {
                this.$nextTick(() => {
                    this.$refs.video.play()
                    let ratio = this.$refs.video.videoWidth / document.querySelector('.video-wrap').clientWidth
                    this.h = this.$refs.video.videoHeight / ratio + 32 + 'px'
                })
            },
            showBack(e) {
                this.isShowBack = !this.isShowBack
            },
            async getCommentData() {
                this.commentData = []
                const {hotComments} = await getMVComment(this.id)
                hotComments.forEach(item => {
                    const {commentId, content, likedCount, time} = item
                    const {nickname, avatarUrl} = item.user
                    this.commentData.push({commentId, content, likedCount, nickname, avatarUrl, time})
                })
            }
        },
        deactivated() {
            this.commentData = []
        },
        activated() {
            this.getMVUrlData()
        },
        created() {
            this.getCommentData()
        }

    }
</script>

<style lang="less" scoped>
    .show {
        top: 10px;
    }

    .hide {
        top: -30px;
    }

    #musicVideo {
        width: 100%;
        height: 100%;

        .video-wrap {
            width: 100%;
        }

        video {
            width: 100vw;
            height: 100%;
        }

        .video-wrap {
            position: fixed;
            top: 0;
            z-index: 9;
        }

    }
</style>
