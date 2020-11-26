<template>
    <div class="base-info-wrap">
        <div class="h">
            <van-collapse v-model="activeNames">
                <van-collapse-item :title="mvData.name" name="1">
                    <div class="content">
                        <div class="play-count">
                            {{mvData.playCount}}次观看
                        </div>
                        <div class="create-time">
                            {{mvData.publishTime}} 发布
                        </div>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>
        <div class="base-info">
            <div class="img-wrap">
                <img src="~assets/img/mv/dianzan.svg">
                <div>{{mvData.like}}</div>
            </div>
            <div class="img-wrap">
                <img src="~assets/img/mv/shoucangjia1.svg">
                <div>{{mvData.commentCount}}</div>
            </div>
            <div class="img-wrap">
                <img src="~assets/img/mv/pinglun.svg">
                <div>{{mvData.subCount}}</div>
            </div>
            <div class="img-wrap">
                <img src="~assets/img/mv/iconfontzhizuobiaozhun20.svg">
                <div>{{mvData.shareCount}}</div>
            </div>
        </div>
        <van-sticky offset-top="245">
            <div @click="goSingerDetail(artists[0].id)" class="single">
                <div v-if="artists.length"  class="single-info">
                    <img  :src="artists[0].img1v1Url+'?param=50y50'" alt="">
                    <span>{{artists[0].name}}</span>
                </div>
                <div class="iconfont icon-jiantou"></div>
            </div>
        </van-sticky>

    </div>

</template>

<script>
    import {getMVData} from "../../../../api";

    export default {
        name: "MVBaseInfo",
        props: ['id','offsetTop'],
        data() {
            return {
                mvData: {},
                activeNames: ['1'],
                artists: {}
            }
        },
        watch:{
            id(newID){
                 this.getMVInfo()
            }
        },
        methods: {
            async getMVInfo() {
                const {data} = await getMVData(this.id)
                const {commentCount, subCount, shareCount, playCount, publishTime, name, artists} = data
                this.artists = artists
                this.mvData = {commentCount, subCount, shareCount, playCount, publishTime, name}
                this.mvData.like = this.mvData.shareCount * 3//点赞数量为假数据 分享次数*3
            },
            goSingerDetail(id){
                this.$router.replace(`singer-detail/${id}`)
            }
        },
        activated() {
            this.getMVInfo()
        }
    }
</script>

<style lang="less" scoped>
    .base-info {
        background-color: white;
        display: flex;
        justify-content: space-between;
        padding: 10px 20px 10px;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, .05);

        img {
            width: 22px;
        }

    }

    .content {
        .play-count {
            font-size: 14px;
            padding-bottom: 10px;
            color: rgba(0, 0, 0, .6);
        }

        .create-time {
            font-size: 14px;
            color: #000;
        }
    }

    .base-info-wrap {
        border-bottom: 10px solid rgba(0, 0, 0, .05);
    }

    .single {background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        transition: background-color .3s;

        &:active {
            background-color: rgba(0, 0, 0, .1);
        }

        .single-info {
            display: flex;
            align-items: center;
        }
        img {
            border-radius: 50%;
            width: 40px;
            height: 35px;
            margin-right: 10px;
        }

        span {
            color: #000;
        }
    }
</style>
