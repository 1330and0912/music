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
                            {{mvData.publishTime}}发布
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
    </div>

</template>

<script>
    import {getMVData} from "../../../../api";

    export default {
        name: "MVBaseInfo",
        props: ['id'],
        data() {
            return {
                mvData: {},
                activeNames: ['1'],
            }
        },
        methods: {
            async getMVInfo() {
                const {data} = await getMVData(this.id)
                const {commentCount, subCount, shareCount, playCount, publishTime, name} = data
                this.mvData = {commentCount, subCount, shareCount, playCount, publishTime, name}
                this.mvData.like = this.mvData.shareCount * 3//点赞数量为假数据 分享次数*3
            },
        },
        activated() {
            this.getMVInfo()
        }
    }
</script>

<style lang="less" scoped>
    .base-info {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        text-align: center;

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
            font-size: 16px;
            color: #000;
        }
    }

    .base-info-wrap {
        border-bottom:10px solid rgba(0,0,0,.05) ;
    }
</style>
