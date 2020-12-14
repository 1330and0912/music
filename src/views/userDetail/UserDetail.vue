<template>
    <transition name="fade">
        <div id="userDetail">
            <content-list>
                <div class="user-detail">
                    <img :src="`${userDetail.avatarUrl}?param=100y100`" alt="">
                    <div class="uname">{{userDetail.nickname}}</div>
                    <div class="detail-list">
                        <div class="item">
                            <div class="l">{{userDetail.follows}}</div>
                            <div class="r">关注</div>
                        </div>
                        <div class="item">
                            <div class="l">{{userDetail.cCount}}</div>
                            <div class="r">粉丝</div>
                        </div>
                        <div class="item">
                            <div class="l">Lv.{{userDetail.level}}</div>
                        </div>
                    </div>
                </div>
                <div class="base-info">
                    <div class="title">
                        基本信息
                    </div>
                    <div class="base-item">
                        村龄: {{userDetail.createDays}}天 ({{creatTime}})
                    </div>
                    <div class="base-item">
                        地区: 福建 泉州
                    </div>
                </div>
                <div class="sub">
                    <div class="title">
                        音乐品味
                    </div>
                    <div v-if="recentPlay.length" class="sub-item" @click="recent">
                        <img :src="`${recentPlay[0].bg}?param=50y50` " alt="">
                        <div class="text">
                            <span class="t1">最近播放歌曲</span>
                            <span class="t2">累计听歌{{recentPlay.length}}首</span>
                        </div>
                    </div>
                    <div class="sub-item" @click="favoriteMusic">
                        <img src="~assets/img/likemusic.jpg" alt="">
                        <div class="text">
                            <span class="t1">我喜欢的音乐</span>
                            <span class="t2">
                                 {{ids.length}}首
                            </span>
                        </div>
                    </div>
                </div>
            </content-list>
        </div>
    </transition>
</template>

<script>
    import ContentList from "../../components/common/ContentList";
    import {getUserDetail, getUserSub, refreshLogin} from "../../api";
    import {mapState} from 'vuex'

    export default {
        name: "UserDetail",
        components: {ContentList},
        props: ['id'],
        data() {
            return {
                userDetail: {},
                subData: {}
            }
        },
        methods: {},
        async created() {
            const res = await getUserDetail(this.id)
            const {avatarUrl, cCount, follows, nickname} = res.profile
            const {level, createDays, createTime} = res
            this.userDetail = {avatarUrl, cCount, follows, nickname, level, createDays, createTime}
            this.getSubData()
        },
        methods: {
            async getSubData() {
                this.subData = await getUserSub()
            },
            recent(){
                this.$router.push('recent')

            },
            favoriteMusic(){
                this.$router.push({
                    path:'/favorite-music',
                    name:'favoriteMusic'
                })
            }
        },
        computed: {
            ...mapState('musicDetail', ['recentPlay']),
            ...mapState('collect', ['ids']),
            creatTime() {
                let date = new Date(this.userDetail.createTime)
                let y = date.getFullYear()
                let m = date.getMonth() + 1
                return `${y}年${m}月注册`
            }
        }
    }
</script>

<style lang="less" scoped>
    .fade-leave-to {
        opacity: 0;
        transform: translate3d(-66%,100%,1210px);
    }
    .fade-leave-active {
        position: absolute;
        z-index: 222;
        transition:all   .3s;
    }

    #userDetail {
        width: 100%;
        height: 100%;
    }

    .item-content {
        padding: 0 20px;
        margin-left: 5%;
        width: 90%;
        background-color: rgba(255, 255, 255, .8);
        border-radius: 10px;
        box-shadow: 1px 0 11px rgba(0, 0, 0, .1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 20px;
    }

    .item-title {
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: bold;
        margin-top: 20px;
    }

    .item-text {
        font-size: 13px;
        color: rgba(0, 0, 0, .6);
    }

    .user-detail {
        align-items: center;
        margin-top: -15px;
        .item-content;

        img {
            margin-top: -40px;
            border: 3px solid white;
            border-radius: 50%;
            width: 80px;
            height: 80px;
        }

        .uname {
            font-weight: bold;
            font-size: 18px;
            margin-top: 10px;
        }

        .detail-list {
            display: flex;
        }

        .item {
            padding: 0 10px;
            margin-top: 10px;
            display: flex;
            font-size: 12px;
            color: rgba(0, 0, 0, .6);

            &:nth-child(-n+2) {
                border-right: 1px solid darkgray;
            }

            .l {
                font-size: 13px;
                color: black;
                margin-right: 4px;
            }

            .r {
                font-size: 13px;
            }
        }
    }

    .base-info {
        margin-top: 20px;
        .item-content;

        .title {
            .item-title
        }

        .base-item {
            padding-top: 20px;
            .item-text;
        }
    }

    .sub {
        margin-top: 20px;
        .item-content;

        .title {
            .item-title;
            margin-bottom: 5px;
        }

        .sub-item {
            display: flex;
            align-items: center;
            padding: 10px 0;

            img {
                border-radius: 10px;
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }

            .text {
                line-height: 16px;
                display: flex;
                flex-direction: column;
                justify-content: center;

                .t1 {
                    color: #000;
                    font-size: 14px;
                    margin-bottom: 3px;
                }

                .t2 {
                    .item-text;
                }
            }
        }

    }
</style>
