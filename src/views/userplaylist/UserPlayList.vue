<template>
    <div id="userPlayList">
        <the-model @changeShow="changShow" :show="isShowPopover" @submit="newPlaylist"/>
        <div class="topBar">
            <div class="back">
                <van-icon @click="back" class="left" name="down"/>
                <div class="text">我的歌单</div>
            </div>
            <div class="add" @click="openPopover">
                <van-icon name="add-o" size="26"/>
            </div>
        </div>
    </div>
</template>

<script>
    import NavHeader from "../../components/common/NavHeader";
    import TheModel from "./childComponents/TheModel";

    export default {
        name: "UserPlayList",
        components: {TheModel, NavHeader},
        data() {
            return {
                playlist: [],
                isShowPopover: false
            }
        },
        props: ['id'],
        created() {
        },
        methods: {
            openPopover() {
                this.isShowPopover = true
            },
            //新建歌单
            newPlaylist() {
            },
            changShow(isShow) {
                this.isShowPopover = isShow
            },
            back() {
                this.$router.back()
            }

        }
    }
</script>

<style lang="less" scoped>
    #userPlayList {
        width: 100%;
        overflow: hidden !important;
        height: 100%;
        background-color: white;
    }

    .topBar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 49px;
        padding: 0 10px;
        color: white;
        background-color: #FF3A3A;

        .back {
            .left {
                transform: rotate(90deg);
                margin-right: 10px;
            }

            font-size: 26px;
            display: flex;
            align-items: center;

            .text {
                font-size: 16px;
            }

        }

        .add {
            display: flex;
        }

    }


</style>
