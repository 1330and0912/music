<template>
    <div class="mv-list-wrap">
        <template v-if="isShowLoading" >
            <loading :show-loading="true"/>
        </template>
        <template v-else>
            <div v-if="mvData.length" :class="this.$store.state.isShowPlayBar?'bottom-padding':''" id="mvPlay">
                <div class="mv-count">
                    <div>
                        <span class="m">MV</span>
                        <span>(共{{mvData.length}}个)</span>
                    </div>
                </div>
                <m-v-list :mv-data="mvData"/>
            </div>
            <div class="empty" v-else>暂无
                内容
            </div>
        </template>
    </div>
</template>

<script>
    import {getSingleMV} from "../../../api";
    import MVList from "./childComponents/MVList";
    import Loading from "../loading/Loading";

    export default {
        name: "MVPlay",
        components: {Loading, MVList},
        props: ['id'],
        data() {
            return {
                mvData: [],
                isShowLoading:true
            }
        },
        created() {
            this.getMVData()
        },
        watch: {
            id() {
                this.isShowLoading = true
                this.getMVData()
            }
        },
        methods: {
            async getMVData() {
                this.mvData = []
                const res = await getSingleMV(this.id)
                res.mvs.forEach((item,index) => {
                    const {id, name, imgurl, artistName: author, playCount, publishTime} = item
                    this.mvData.push({id, name, imgurl, author, playCount, publishTime})
                    this.isShowLoading = index!=res.mvs.length-1
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .empty {
        font-size: 14px;
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
    .bottom-padding {
        padding-bottom: 49px !important;
    }

    #mvPlay {
        height: 100vh;
    }

    .mv-list-wrap{
        height: 100%;
        width: 100%;
        position: relative;
    }

    .mv-count {
        height: 30px;
        padding: 0px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            padding-top: 5px;
            display: flex;
            align-items: center;
        }

        .m {
            font-size: 18px;
            font-weight: bold;
            color: #000000;
            margin-right: 6px;
        }

        span {
            font-size: 12px;
            color: rgba(0, 0, 0, .6);
        }

    }
</style>
