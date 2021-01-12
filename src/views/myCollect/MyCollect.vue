<template>
    <div id="myCollect" :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
        <nav-header title="我的收藏"/>
        <div class="h">
        </div>
        <div class="side-wrap">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item @click="getSingerList" title="歌手" :badge="singerList.length"/>
                <van-sidebar-item @click="getMVList" title="MV" :badge="MVList.length"/>
            </van-sidebar>
            <div class="content">
                <template v-if="activeKey==0">
                    <singer-list :singer-list="singerList"/>
                </template>
                <template v-else>
                    <m-v-list :mv-data="MVList"/>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import NavHeader from "../../components/common/NavHeader";
    import {collectSinger, getCollectMVList, getCollectSingerList} from "../../api";
    import SingerList from "./childComponents/SingerList";
    import MVList from "../../components/common/mv/childComponents/MVList";

    export default {
        name: "MyCollect",
        components: {MVList, SingerList, NavHeader},
        data() {
            return {
                activeKey: 0,
                singerList: [],
                MVList: []
            }
        },
        methods: {
            getSingerList() {
                this.singerList = []
                console.log(this.activeKey);
                getCollectSingerList().then(res => {
                    this.singerList.push(...res.data)
                })
            },
            getMVList() {
                this.MVList = []
                getCollectMVList().then(res => {
                    res.data.forEach(item => {
                        const {vid: id, coverUrl: imgurl, title: name} = item
                        this.MVList.push({id, name, imgurl})
                    })
                })
            }
        },
        created() {
            this.getSingerList()
            this.getMVList()
        }
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 49px !important;
    }

    #myCollect {
        height: 100%;
        width: 100%;

        .content {
            height: 100%;
            width: 80%;
            overflow: scroll;
            border-left: 4px solid rgba(0, 0, 0, .1);
        }
    }

    .h {
        width: 100%;
        height: 10%;
        position: relative;
        background-size: cover;
        background-color: rgba(222,2,2,.3);
        &::after {
            content: ' ';
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: rgba(0, 0, 0, .5);
        }
    }

    .side-wrap {
        border-top: 10px solid rgba(0, 0, 0, .1);
        display: flex;
        height: calc(90% - 10px);
    }
</style>
