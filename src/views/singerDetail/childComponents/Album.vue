<template>
    <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" class="album ">
        <div @click.stop="goAlbumDetail(item.id)" :id="item.id" v-for="item in albumsList" class="wrap">
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
        <van-popup @closed="popupClosed" close-on-popstate :overlay="false" v-model="showPopup" position="right"
                   :style="{ width: '80%',height:'100%',right:'-200%'}">
            <div class="album-detail">
                <header :style="{backgroundImage:`url(${albumInfo.blurPicUrl})`}" class="header">
                </header>
                <div class="list">
                    <div class="h">
                        <i class="iconfont icon-bofang1"></i>
                        <span class="play-all">播放全部(共{{albumContent.length}}首)</span>
                    </div>
                    <music-list :music-info="albumContent"/>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import {getAlbum, getAlbumContent, getLyric, getSongURL} from "../../../api";
    import {dataLyric} from "../../../common/dataLyric";
    import MusicList from "../../../components/common/musicList/MusicList";

    export default {
        name: "Album",
        components: {MusicList},
        props: ['id'],
        data() {
            return {
                albumsList: [],
                showPopup: false,
                albumContent: [],
                albumInfo: {},
                closed: true
            }
        },
        watch: {
            id() {
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
            },
            popupClosed() {
                this.albumContent = []
                this.albumInfo = []
                this.closed = true
            },
            async goAlbumDetail(id) {

                if (this.showPopup) {
                    this.showPopup = false
                    this.closed = false
                } else if (this.closed) {
                    this.showPopup = true
                    const {album, songs} = await getAlbumContent(id)
                    const {blurPicUrl, name, description, info, artist} = album
                    this.albumInfo = {blurPicUrl, name, description, info, author: artist.name}
                    songs.forEach(async item => {
                        const {id, name: songName} = item
                        const {picUrl: bg} = item.al
                        const author = item.ar[0].name
                        const lyric = (await getLyric(id)).lrc && dataLyric((await getLyric(id)).lrc.lyric) || ''//歌词
                        lyric && this.albumContent.push({id, songName, bg, author, lyric})
                    })
                }
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
            box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, .2);
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

    .album-detail {
        height: 100%;

        .header {
            background-position: center center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 35%;

        }

        .list {
            position: absolute;
            top: 30%;
            width: 100%;
            padding: 20px 0 49px;
            height: 65%;
            border-radius: 6%;
            background-color: #Fff;

            .h {
                padding: 0 20px 10px;
                display: flex;
                align-items: center;

                .play-all {
                    font-size: 12px;
                    color: rgba(0, 0, 0, .6);
                }

                i {
                    font-size: 20px;
                    margin-right: 10px;
                }
            }
        }
    }
</style>
