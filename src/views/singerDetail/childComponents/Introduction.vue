<template>
    <div v-if="!this.$store.state.isShowLoading"
         class="introduction">
        <img class="singer-img" :src="bg" alt="">
        <div class="tags">
            <!--            {{introduction.topicData[0].tags[0]}}-->
        </div>
        <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" class="content-wrap">
            <ul>
                <li v-for="item in introduction">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getAlbum, getSingerIntroduction} from "api";

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

    .content-wrap {
        padding: 10px;
        overflow: scroll;
        li {
            position: relative;
            margin-top:  20px;
            border: 10px solid #FF3A3A;
            border-color: transparent transparent transparent  #FF3A3A;
            padding-left: 10px;
            line-height: 28px;

        }
    }
</style>
