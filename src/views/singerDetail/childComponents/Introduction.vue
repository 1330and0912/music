<template>
    <div v-if="!this.$store.state.isShowLoading"
         class="introduction">
        <template v-if="isShowLoading">
            <loading :show-loading="true"/>
        </template>
        <template v-else>
            <img class="singer-img" :src="bg+'?param=200y200'" alt="">
            <div class="tags">
                <!--            {{introduction.topicData[0].tags[0]}}-->
            </div>
            <div class="title">个人简介</div>
            <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" class="content-wrap">
                <ul>
                    <li v-for="item in introduction">
                        {{item}}
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>

<script>
    import {getAlbum, getSingerIntroduction} from "api";
    import Loading from "../../../components/common/loading/Loading";

    export default {
        name: "Introduction",
        components: {Loading},
        props: ['id'],
        data() {
            return {
                bg: '',
                introduction: '',
                isShowLoading: true
            }
        },
        watch: {
            id() {
                this.isShowLoading = true
                this.bg = ''
                this.introduction = {}
                this.getBg()
                this.getIntroduction()
            }
        },
        methods: {
            async getBg() {
                this.bg = (await getAlbum(this.id, 1)).artist.picUrl
                this.isShowLoading = false
            },
            async getIntroduction() {
                let res = await getSingerIntroduction(this.id)
                this.introduction = res.briefDesc.split('\n')
                this.introduction = this.introduction.filter(item => item.trim())
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

    .title {
        font-weight: bold;
        font-size: 20px;
        padding-left: 10px;
        margin-top: 20px;
    }

    .content-wrap {
        padding: 10px;
        overflow: scroll;

        li {
            position: relative;
            border: 10px solid #FF3A3A;
            border-color: transparent transparent transparent #FF3A3A;
            padding-left: 10px;
            line-height: 28px;
            margin-bottom: 10px;
        }
    }
</style>
