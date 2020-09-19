<template>
    <div id="musicVideo">
        <!--        <back :class="isShowBack?'show':'hide'"/>-->
       <div class="video-wrap">
           <video x5-video-player-type="h5-page" x5-playsinline="" playsinline="" webkit-playsinline="" ref="video"
                  @canplay="playVideo" controls
                  :src="url">
           </video>
       </div>
        <m-v-base-info :id="id"/>
        <m-v-related-video :id="id"/>
    </div>
</template>

<script>
    import {getMVData, getMVUrl} from "../../../api";
    import Back from "./childComponents/Back";
    import MVBaseInfo from "./childComponents/MVBaseInfo";
    import MVRelatedVideo from "./childComponents/MVRelatedVideo";

    export default {
        name: "MusicVideo",
        components: {MVRelatedVideo, MVBaseInfo, Back},
        props: ['id'],
        data() {
            return {
                url: '',
                isShowBack: true,
                mvData: {}
            }
        },
        methods: {
            async getMVUrlData() {
                const res = await getMVUrl(this.id)
                this.url = res.data.url
                console.log(this.url);
            },
            playVideo() {
                this.$nextTick(() => {
                    this.$refs.video.play()
                })
            },
            showBack(e) {
                this.isShowBack = !this.isShowBack
            }

        },
        activated() {
            this.getMVUrlData()
        },
        deactivated() {
            this.url = ''
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
            background-color: red;
        }
        video {
            width: 100%;
        }

    }
</style>
