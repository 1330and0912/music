<template>
    <div @click="goPlayMV(mv.id)" class="mv-list-item">
        <div class="img-wrap">
            <img class="cover" v-lazy="mv.imgurl+'?param=150y130'" alt="">
            <div v-if="mv.playCount" class="play-icon-wrap">
                <img class="play-icon" src="~assets/img/play.svg" alt="">
                <span >{{mv.playCount |formatCount}}</span>
            </div>
        </div>
        <div class="mv-info">
            <div class="mv-name-wrap">
                <img class="mv-icon" src="~assets/img/mv.png" alt="">
                <span class="mv-name">{{mv.name}}</span>
            </div>
            <div v-if="mv.publishTime" class="create-time">
                {{mv.publishTime}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MVListItem",
        props: {
            mv: {
                type: Object,
                default: () => ({})
            }
        },
        filters: {
            formatCount(value) {
                return (value / 10000).toFixed(0) + '万'
            }
        },
        methods:{
            goPlayMV(id){
                this.$router.push({
                    name:'musicVideo',
                    params:{
                        id
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .mv-list-item {
        padding: 5px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        transition: background-color .3s;
        margin-bottom: 8px;
        border-bottom: 1px solid rgba(0,0,0,.05);
        &:active {
            background-color: rgba(1, 1, 1, .1);
        }
        &:last-child {
            border-bottom: none;
        }

        .img-wrap {
            flex-shrink: 0;
            border-radius: 5px;
            width: 30%;
            position: relative;

            .cover {
                border-radius: 5px;
                width: 100%;
                vertical-align: middle;
            }

            .play-icon-wrap {
                width: 30px;
                position: absolute;
                z-index: 1;
                display: flex;
                align-items: center;
                right: 22%;
                bottom: 6%;

                .play-icon {
                    width: 20px;
                }

                span {
                    white-space: nowrap;
                    font-size: 12px;
                    color: white;
                }

            }
        }

        .mv-info {
            width:68%;

            .mv-name-wrap {
                display: flex;
                align-items: center;

                .mv-icon {
                    width: 40px;
                    height: 35px;
                }

                .mv-name {
                    width: 85%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    font-size: 14px;
                    color: #000000;
                }


            }

            .create-time {
                font-size: 12px;
                padding-left: 5px;
            }
        }
    }
</style>
