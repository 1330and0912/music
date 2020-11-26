<template>
    <div class="related-video">
        <span>相关视频</span>
        <m-v-list :mv-data="mvData"/>
    </div>
</template>

<script>
    import MVList from "../../mv/childComponents/MVList";
    import {getRelatedMVData} from "../../../../api";

    export default {
        name: "MVRelatedVideo",
        components: {MVList},
        props: ['id'],
        data() {
            return {
                mvData: []
            }
        },
        watch:{
            id(newID){
                this.getRelatedMVInfo()
            }
        },
        methods: {
            async getRelatedMVInfo() {
                const res = await getRelatedMVData(this.id)
                this.mvData = []
                res.mvs.forEach(async item => {
                    const {cover: imgurl, name, playCount, artistName: author, id} = await item
                    this.mvData.push({imgurl, name, playCount, author, id})
                })
            }
        },
        activated() {
            this.getRelatedMVInfo()

        },
        deactivated() {
            this.mvData = []
        }
    }
</script>

<style lang="less" scoped>
    .related-video {
        background-color: white;
        padding: 15px 0 0;
        border-bottom: 10px solid rgba(0,0,0,.05);
        span {
            display: block;
            font-weight: bold;
            height: 20px;
            padding: 0 15px;
        }
    }
</style>
