<template>
    <transition name="scale">
        <div id="userPlayList" :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
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
            <div class="list-wrap">
                <transition-group v-if="userPlaylist.length" name="list-complete" tag="div">
                    <user-play-list-item :key="item.name" @edit="edit" v-for="(item,index) in userPlaylist"
                                         :list="item"/>
                </transition-group>
                <div v-else class="empty">
                    当前无歌单
                    <div @click="openPopover" class="btn-add">
                        去添加
                    </div>
                </div>
            </div>
            <div class="action">
                <action-sheet @select="select" @isShow="isShow" :options="options" :show-action="show"/>
            </div>
        </div>
    </transition>
</template>

<script>
    import NavHeader from "../../components/common/NavHeader";
    import TheModel from "./childComponents/TheModel";
    import {mapState, mapActions} from 'vuex'
    import UserPlayListItem from "./childComponents/UserPlayListItem";
    import ActionSheet from "../../components/common/ActionSheet";

    export default {
        name: "UserPlayList",
        components: {ActionSheet, UserPlayListItem, TheModel, NavHeader},
        data() {
            return {
                show: false,
                actions: [{name: '选项一'}, {name: '选项二'}, {name: '选项三'}],
                playlist: [],
                isShowPopover: false,
                img: require('../../assets/img/uplaylist.jpg'),
                options: {
                    title: '',
                    btn: [
                        {text: '编辑', icon: 'edit'},
                        {text: '删除', icon: 'delete'}
                    ]
                }
            }
        },
        props: ['id'],
        created() {
        },
        computed: {
            ...mapState('userPlayList', ['userPlaylist'])
        },
        methods: {
            ...mapActions('userPlayList', ['createPlayList', 'deletePlaylist']),
            openPopover() {
                this.isShowPopover = true
            },
            //新建歌单
            async newPlaylist(playlistName) {
                const options = {
                    name: playlistName, img: this.img
                }
                const result = await this.createPlayList(options)
                this.$toast.success(result)
                this.isShowPopover = false
            },
            //显示添加歌单界面
            changShow(isShow) {
                this.isShowPopover = isShow
            },
            back() {
                this.$router.back()
            },
            isShow(val) {
                this.show = val
            },
            //打开编辑下拉框
            edit(value) {
                this.options.title = value.name
                this.show = true
            },
            select(index) {
                if (index == 1) {
                    this.deletePlaylist(this.options.title)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 49px !important;
    }

    .list-complete-item {
        transition: all 1s;
    }

    .list-complete-enter, .list-complete-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }

    .list-complete-enter-active, .list-complete-leave-active {
        transition: all 1s;
    }


    .scale-leave-to {
        opacity: 0;
        transform: scale(0.5);
    }

    .scale-leave-active {
        position: fixed !important;
        z-index: 266;
        transition: all .3s !important;
    }


    #userPlayList {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        background-color: #F7F7F7;
    }

    .topBar {
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 44px;
        padding: 0 10px;
        color: white;
        background-color: #FC3B2A;
        z-index: 11;

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

    .list-wrap {
        width: 100%;
        padding-top: 49px;

        .empty {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            position: absolute;
            width: 200px;
            top: calc(50% - 44px);
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 13px;
            .btn-add {
                background-color: @main-color;
                color: white;
                font-size: 16px;
                margin-top: 15px;
                padding: 10px 30px;
                border-radius: 20px;
            }
        }
    }


</style>
