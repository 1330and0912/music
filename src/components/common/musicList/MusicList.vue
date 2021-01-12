<template>
    <div class="music-list" :class="isScrollY? 'scroll':''">
        <div v-if="isShowLoadingProps" class="l">
            <loading :show-loading="isShowLoading"/>
        </div>
        <music-list-item class="listItem" @edit="edit" :key="index" :music-info="item"
                         v-for="(item,index) in musicInfo"/>
        <action-sheet @isShow="isShow" :show-action="showAction">
            <template #content>
                <div class="action-title">添加到歌单</div>
                <van-checkbox-group v-model="result">
                    <van-cell-group>
                        <van-cell class="cell"
                                  v-for="(item, index) in userPlaylist"
                                  clickable
                                  :key="index"
                                  :title="item.name"
                                  @click="toggle(index)"
                        >
                            <template #right-icon>
                                <van-checkbox :name="item" ref="checkboxes"/>
                            </template>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
                <div :class="$store.state.isShowPlayBar?'btn-b':''" class="action-btn" @click="addToPlaylist">添加收藏
                    <div class="btn-animation">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </div>
                </div>
            </template>
        </action-sheet>
    </div>
</template>

<script>
    import MusicListItem from "./MusicListItem";
    import {mapState, mapActions} from 'vuex'
    import Loading from "../loading/Loading";
    import ActionSheet from "../ActionSheet";

    export default {
        name: "MusicList",
        components: {ActionSheet, Loading, MusicListItem},
        props: {
            musicInfo: {
                type: Array,
                default: () => []
            },
            isScrollY: {
                type: Boolean,
                default: true
            },
            isShowLoadingProps: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                isShowLoading: true,
                showAction: false,
                result: [],
                detail: {}
            }
        },
        watch: {
            musicInfo(newVal, oldVal) {
                if (newVal.length) {
                    this.isShowLoading = false
                }
            }
        },
        activated() {

            if (this.musicInfo.length == 0) {
                this.isShowLoading = true
            }
        },
        computed: {
            ...mapState('userPlayList', ['userPlaylist'])
        },
        methods: {
            ...mapActions('userPlayList', ['addUserPlaylistDetail']),
            edit(value) {
                this.detail = value
                this.showAction = true
            },
            isShow(newVal) {
                this.showAction = newVal
            },
            toggle(index) {
                this.$refs.checkboxes[index].toggle();
            },
            async addToPlaylist() {
                if (this.result.length) {
                    let selectPlaylistName = this.result.map(item => item.name)
                    const value = {
                        selectPlaylistName,
                        detail: this.detail
                    }
                    let res = await this.addUserPlaylistDetail(value)
                    this.showAction = false
                    this.result = []
                    this.$toast({
                        message: res,
                        icon: 'music-o',
                        duration: 500
                    })
                }
            },
            getContainer() {
                return document.querySelector('.music-list')
            }
        }
    }
</script>

<style lang="less" scoped>
    .music-list {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .scroll {
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll !important;
    }

    .action-btn, .action-title {
        width: 100%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        letter-spacing: 1px;
    }

    .action-btn {
        border-top: 2px solid rgba(0, 0, 0, .03);
        color: #0086b3;
        font-size: 14px;
        position: relative;

        .btn-animation {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 40px;
            width: 100%;
            display: flex;
            justify-content: space-around;

            li {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: rgba(123, 0, 110, .1);
                animation:  move 3s infinite linear ;
                animation-direction: alternate;
                &:nth-child(1){
                    animation-delay: .1s;
                }
                &:nth-child(2){
                    animation-delay: .2s;
                }
                &:nth-child(3){
                    animation-delay: 0s;
                }
                &:nth-child(4){
                    animation-delay: .3s;
                }
            }

        }
    }

    .btn-b {
        padding-bottom: 90px;
    }

    .cell span {
        display: inline-block;
        width: 180px;
        overflow: hidden;
        white-space: nowrap;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        font-size: 14px;

    }

    @keyframes move {
        0% {
            transform: translateY(-10px);
            background-color: rgba(123, 0, 110, .2);
        }
        10%{
            transform: translateY(-9px);
        }
        20%{
            transform: translateY(-8px);
        }
       30%{
            transform: translateY(-7px);
           background-color: rgba(123, 0, 110, .2);
       }
        40%{
            transform: translateY(-6px);
            background-color: rgba(123, 0, 110, .1);
        }
        50%{
            transform: translateY(-5px);
        }
        60%{
            transform: translateY(-4px);
        }
        70%{
            transform: translateY(-3px);
            background-color: rgba(123, 0, 110, .2);
        }
        80%{
            transform: translateY(-2px);
        }
        90%{
            transform: translateY(-1px);
        }
        100% {
            transform: translateY(0px);
            background-color: rgba(123, 0, 110, .1);
        }

    }
</style>
