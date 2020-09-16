<template>
    <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" class="album">
        <div :id="item.id" v-for="item in albumsList" class="wrap">
            <img v-lazy="item.picUrl" alt="">
            <div class="album-info">
                <div class="album-name">
                    {{item.name}}
                </div>
                <div class="create-time">
                    {{item.publishTime | formatDate}}
                    <span>歌曲：{{item.size}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getAlbum} from "../../../api";

    export default {
        name: "Album",
        props: ['id'],
        data() {
            return {
                albumsList: []
            }
        },
        watch:{
            id(){
                this.albumsList = []
                this.getAlbumList()
            }
        },
        filters: {
            formatDate(value) {
                let date = new Date(value)
                let y = date.getFullYear()
                let m = date.getMonth() + 1
                let d = date.getDay()
                return `${y}-${m}-${d}`
            }
        },
        methods: {
            getAlbumList() {
                getAlbum(this.id).then(res => {
                    const {hotAlbums} = res
                    hotAlbums.forEach(item => {
                        const {picUrl, name, id, publishTime, size} = item
                        this.albumsList.push({picUrl, name, id, publishTime, size})
                    })
                })
            }
        },
        created() {
            this.getAlbumList()
        }
    }
</script>

<style lang="less" scoped>
    .bottom-padding {
        padding-bottom: 49px !important;
    }

    .album {
        overflow-y: scroll;
        height: 100%;
        padding: 10px 10px 0;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .wrap {
            width: 48%;
            border-radius: 10px;
            box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, .3);
            margin-bottom: 20px;
            padding: 0 0px 10px;

            img {
                border-radius: 10px;
                width: 100%;
            }

            .album-info {
                padding: 0 4px;

                .album-name {
                    font-size: 14px;
                }

                .create-time {
                    font-size: 12px;
                    color: rgba(0, 0, 0, .6);
                    margin-top: 5px;
                    display: flex;
                    span {
                        margin-left: 10px;
                        font-size: 12px;
                        color: rgba(0, 0, 0, .6);
                    }
                }
            }
        }
    }
</style>
