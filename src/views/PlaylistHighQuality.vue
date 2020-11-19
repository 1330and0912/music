<template>
    <div id="playlistHighQuality">
        <div v-for="item in tags" class="item">
            <strong class="name">{{item}}</strong>
            <div class="wrap">
                <div v-for="list in list(item)" :key="list.id" class="wrap-con">
                    <img v-lazy="list.bg+'?param=100y100'" alt="">
                    <div class="desc">
                        {{ list.description}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getPlaylistHighQuality, getTopPlayList} from "../api";

    export default {
        name: "PlaylistHighQuality",
        data() {
            return {
                playlist: [],
                tags: []
            }
        },
        created() {
            this.getPlaylist()
        },
        methods: {
            //获取歌单内容
            async getPlaylist() {
                const {playlists} = await getTopPlayList()
                this.playlist = playlists.map(item => {
                    return {
                        name: item.name,
                        id: item.id,
                        tag: item.tag,
                        description: item.description,
                        bg: item.coverImgUrl
                    }
                })
                console.log(this.playlist);
                let tags = this.playlist.map(item => {
                    return item.tag
                })

                this.tags = [...new Set(tags)]
                console.log(this.tags);
            }
        },
        computed: {
            list() {
                return (tag) => {
                    return this.playlist.filter(item => item.tag == tag)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #playlistHighQuality {
        width: 100%;
        height: 100%;
        overflow: scroll;
        background-image: linear-gradient(#EEEEEE,#F3F3F3,#f5f2f0,#e9e9e9);
        background-attachment: scroll;
    }

    .item {
    }

    .name {
        width: 100%;
        display: block;
        padding:6px 15px;
        border: 7px solid lightskyblue;
        border-right-color: transparent;
        border-top-color: transparent;
        border-bottom-color: transparent;
    }

    .wrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        padding: 0 10px;
        .wrap-con {
            padding: 10px 5px;
            flex-shrink: 0;
            width: 33%;
            img {
                border-radius: 10px;
                width:100% ;
            }

            .desc {
                width: 100px;
                overflow: hidden;
                white-space: nowrap;
                -ms-text-overflow: ellipsis;
                text-overflow: ellipsis;
            }

        }
    }
</style>
