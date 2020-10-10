<template>
    <div id="myCollect" :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
        <nav-header title="我的收藏"/>
        <div class="h">
        </div>
        <div class="side-wrap">
            <van-sidebar v-model="activeKey">
                <van-sidebar-item @click="getSingerList" title="歌手" :badge="singerList.length"/>
                <van-sidebar-item title="MV" badge="5"/>
            </van-sidebar>
            <div class="content">
                <template v-if="activeKey==0">
                    <singer-list :singer-list="singerList"/>
                </template>
                <template v-else>asd</template>
            </div>
        </div>
    </div>
</template>

<script>
    import NavHeader from "../../components/common/NavHeader";
    import {collectSinger, getCollectSingerList} from "../../api";
    import SingerList from "./childComponents/SingerList";

    export default {
        name: "MyCollect",
        components: {SingerList, NavHeader},
        data() {
            return {
                activeKey: 0,
                singerList: []
            }
        },
        methods: {
            getSingerList() {
                this.singerList = []
                console.log(this.activeKey);
                getCollectSingerList().then(res => {
                    this.singerList.push(...res.data)
                })

            }
        }
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 49px!important;
    }
    #myCollect {
        height: 100%;
        width: 100%;
        .content {
            height: 100%;
            overflow: scroll;
            border-left: 4px solid #FF3A3A;
        }
    }

    .h {
        width: 100%;
        height: 30%;
        position: relative;
        background-image: url("../../../src/assets/img/myCollecy.jpg");
        background-size: cover;

        &::after {
            content: ' ';
            height: 100%;
            width: 100%;
            position: absolute;
            background-color: rgba(0, 0, 0, .5);
        }
    }

    .side-wrap {
        display: flex;
        height: 70%;
    }
</style>
