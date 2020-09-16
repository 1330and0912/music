<template>
    <div v-if="!this.$store.state.isShowLoading" :class="this.$store.state.isShowPlayBar?'bottom-padding':''"
         class="introduction">
        <img class="singer-img" :src="bg" alt="">
        <div class="tags">
<!--            {{introduction.topicData[0].tags[0]}}-->
        </div>
        <div class="content-wrap">
            <div v-for="(item,index) in introduction.introduction" class="wrap">
                <div class="title">
                    <strong>{{item.ti}}</strong>
                </div>
                <div class="content">
                    {{item.txt}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAlbum,getSingerIntroduction} from "api";

    export default {
        name: "Introduction",
        props: ['id'],
        data() {
            return {
                bg: '',
                introduction: ''
            }
        },
        watch: {
            id() {
                this.bg = ''
                this.introduction = {}
                this.getBg()
                this.getIntroduction()
            }
        },
        methods: {
            async getBg() {
                this.bg = (await getAlbum(this.id, 1)).artist.picUrl
            },
            async getIntroduction() {
                this.introduction = await getSingerIntroduction(this.id)
                console.log(this.introduction);
            }
        },
        async created() {
            this.getBg()
            this.getIntroduction()
        }
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 49px !important;
    }

    .introduction {
        height: 100%;
        overflow-y: scroll;

        .singer-img {
            width: 100%;
        }
    }
    .content-wrap {
        padding: 10px;
        .title {
            padding:10px 0;
        }
        .content {
            font-size: 14px;
        }
    }
</style>
