<template>
    <transition name="slide-down">
        <div class="wrapper">
            <div id="musicVideo">
                <div ref="videoWrap" class="video-wrap">
                    <back/>
                    <video x5-video-player-type="h5-page" x5-playsinline="" playsinline="" webkit-playsinline=""
                           ref="video"
                           @canplay="playVideo" controls
                           :src="url">
                    </video>
                </div>
                <m-v-base-info :offset-top="h" :id="id"/>
                <m-v-related-video :id="id"/>
                <comment :comment-data="commentData"/>
            </div>
        </div>
    </transition>
</template>

<script>
    import {getMVComment, getMVData, getMVUrl} from "../../../api";
    import Back from "./childComponents/Back";
    import MVBaseInfo from "./childComponents/MVBaseInfo";
    import MVRelatedVideo from "./childComponents/MVRelatedVideo";
    import Comment from "./childComponents/Comment";
    import Loading from "../loading/Loading";

    export default {
        name: "MusicVideo",
        components: {Loading, Comment, MVRelatedVideo, MVBaseInfo, Back},
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
                commentData: [],
                isShowLoading: true
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
                    // let ratio = this.$refs.video.videoWidth / document.querySelector('.video-wrap').clientWidth
                    // this.h = this.$refs.video.videoHeight / ratio + 32 + 'px'
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
    .slide-down-leave-to {
        -webkit-transform: translate3d(0,0,0);
        -moz-transform: translate3d(0,0,0);
        -ms-transform: translate3d(0,0,0);
        -o-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        opacity: 0;

        transform: scale(0.01);
    }

    .slide-down-leave-active {
        position: fixed !important;
        z-index: 9999;
        transition: all .5s !important;
    }

    #musicVideo {
        padding-top: 240px;
        width: 100%;
        height: 100%;

        .video-wrap {
            width: 100%;
            height: 200px !important;
        }

        video {
            height: 200px !important;
            width: 100%;
            background-color: rgba(0, 0, 0, 1);

        }

        .video-wrap {
            position: fixed;
            top: 0;
            z-index: 9;
        }

    }
</style>
