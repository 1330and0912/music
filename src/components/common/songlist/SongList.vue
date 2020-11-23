<template>
    <transition name="slide-down">
        <div class="wrapper">
            <loading v-if="isShowLoading" :show-loading="isShowLoading"/>
            <div v-else class="song-list-wrap" @scroll="scroll">
                <div class="song-list" id="songList"
                     :style="{backgroundImage:`url(${songList[0].bg+'?param=150y130'})`}">
                </div>
                <top-back ref="top" :title="songListName" :bg-color="topBarRgb"/>
                <base-info ref="base" :opacity="opacity" :subscribers="subscribers" :base-info="songList[0]"/>
                <play-list :is-scroll-y="isScrollY" :play-list="songList"/>
            </div>
        </div>
    </transition>
</template>

<script>
    import SongListItem from "./childComponents/SongListItem";
    import {getLyric, getPlayListDetail, getSongDetail} from "../../../api";
    import Loading from "../loading/Loading";
    import MusicList from "../musicList/MusicList";
    import BaseInfo from "./childComponents/BaseInfo";
    import {dataLyric} from "../../../common/dataLyric";
    import PlayList from "./childComponents/PlayList";
    import TopBack from "./childComponents/TopBack";

    export default {
        name: "SongList",
        components: {TopBack, PlayList, BaseInfo, MusicList, Loading, SongListItem},
        props: {
            id: String
        },
        data() {
            return {
                songList: [],
                isShowLoading: true,
                songListName: '',
                subscribers: [],
                isScrollY: false,
                opacity: 1,
                topBarRgb: 0,
                scrollTop: 0
            }
        },
        async created() {
            this.getSongList()
        },
        methods: {
            async getSongList() {
                let res = await getPlayListDetail(this.id)
                this.songListName = res.playlist.name
                this.subscribers = res.playlist.subscribers
                res = res.playlist.tracks
                res.forEach(item => {
                    const {mv: mvid, id, name: songName} = item
                    const bg = item.al.picUrl
                    const author = item.ar[0].name
                    this.songList.push({mvid, id, bg, songName, author})
                })
                this.songList = this.songList.length > 30 ? this.songList.slice(0, 30) : this.songList
                this.songList.forEach(async (item, index) => {
                    const res = (await getLyric(item.id))
                    let lyric = res.lrc
                    lyric = dataLyric(lyric)
                    this.songList[index].lyric = lyric
                })
                this.isShowLoading = false
            },
            scroll(e) {
                let topH = this.$refs.top.$el.clientHeight
                let baseH = this.$refs.base.$el.clientHeight
                this.scrollTop = e.target.scrollTop.toFixed(0)
                if (this.scrollTop >= 0 && this.scrollTop <= baseH) {
                    if (this.scrollTop <= 0) {
                        this.topBarRgb = 0
                    } else if (this.scrollTop >= baseH - topH) {
                        this.topBarRgb = 1
                    } else {
                        this.topBarRgb = this.scrollTop / 400
                    }

                }

            }
        },
        watch: {
            id() {
                this.isShowLoading = true
                this.songList = []
                this.getSongList()
            },
        },
        deactivated() {
            this.topBarRgb = 0
        }
    }
</script>

<style lang="less" scoped>

    .slide-down-leave-to {
        transform: translateX(100%);
        position: fixed !important;
        opacity: 0;
        z-index: 9999;
    }

    .slide-down-leave-active {
        transition: all .8s !important;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }

    .wrapper {
        overflow: scroll;
        width: 100%;
        height: 100%;

    }

    .song-list-wrap {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .song-list {
        z-index: -1;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        filter: blur(100px);

    }
</style>
