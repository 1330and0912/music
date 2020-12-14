<template>
    <transition name="slide-right">
        <div class="play-wrap">
            <template v-if="isShowLoading">
                <loading :show-loading="true"/>
            </template>
            <template v-else>
                <div ref="play" id="playlistHighQuality">

                    <div class="h">
                        <div class="icon" @click="back">
                            <van-icon name="down"/>
                        </div>
                        <div class="text">
                            返回
                        </div>
                    </div>

                    <div class="item-wrap">
                        <div class="sw">
                            <swiper :options="swiperOptions">
                                <swiper-slide @click.native="openPlaylist(item.id)" :key="item.id"
                                              v-for="item in swiperImg">
                                    <img :src="item.bg"/>
                                </swiper-slide>
                            </swiper>
                        </div>

                        <div v-for="item in tags" class="item">
                            <strong class="name">{{item}}</strong>
                            <div class="wrap">
                                <div @click="openPlaylist(list.id)" v-for="list in list(item)" :key="list.id"
                                     class="wrap-con">
                                    <img v-lazy="list.bg+'?param=200y200'" alt="">
                                    <div class="desc">
                                        {{ list.description}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </transition>
</template>

<script>
    import {getPlaylistHighQuality, getTopPlayList} from "../api";
    import Loading from "../components/common/loading/Loading";

    import {swiper, swiperSlide} from "vue-awesome-swiper";

    export default {
        name: "PlaylistHighQuality",
        components: {Loading, swiper, swiperSlide},
        data() {
            return {
                playlist: [],
                tags: [],
                isShowLoading: true,
                swiperOptions: {
                    autoplay: true,
                    loop: true,
                    effect: 'coverflow',
                    slidesPerView: 2,
                    centeredSlides: true,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 50,
                        depth: 180,
                        modifier: 2,
                        slideShadows: true
                    },
                }
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
                let tags = this.playlist.map(item => {
                    return item.tag
                })

                this.tags = [...new Set(tags)]
                this.isShowLoading = false
            },
            //打开歌单
            openPlaylist(id) {
                this.$router.push(`song-list/${id}`)
            },
            back() {
                this.$router.back()
            }
        },
        computed: {
            list() {
                return (tag) => {
                    return this.playlist.filter(item => item.tag == tag)
                }
            },
            swiperImg() {
                return this.playlist.slice(0, 9)
            }


        }
    }
</script>

<style lang="less" scoped>
    .sw {
        padding: 0 10px;
        width: 100%;
    }

    .swiper-container {
        height: 200px;

        .swiper-slide {
            border-radius: 20px;
        }

        img {
            border-radius: 20px;
            width: 100%;
            height: 200px;
        }
    }

    .slide-right-leave-active {
        position: fixed;
        z-index: 9999;
        transition: all .5s ease;
    }

    .slide-right-leave-to {
        transform: translateX(100%);

    }

    .play-wrap {
        width: 100%;
        height: 100%;
    }

    #playlistHighQuality {
        position: relative;
        z-index: 101;
        padding-bottom: 30px;
        width: 100%;
        height: 100%;
        overflow: scroll;
        background-image: linear-gradient(#EEEEEE, #F3F3F3, #f5f2f0, #e9e9e9);
        background-attachment: scroll;
    }

    .item {
        padding: 0 0 0 10px;
    }

    .item-wrap {
        padding-top: 20px;
        height: calc(100% - 49px);
        overflow: scroll;

    }

    .h {
        height: 35px;
        background-color: #FF3A3A;
        display: flex;
        align-items: center;
        padding: 0 10px;

        .icon {
            transform: rotate(90deg);
            margin-right: 10px;
            color: white;
            font-size: 24px;
        }

        .text {
            color: white;
        }
    }

    .name {
        width: 100%;
        display: block;
        padding: 2px 10px;
        border: 7px solid #FF3A3A;
        border-right-color: transparent;
        border-top-color: transparent;
        border-bottom-color: transparent;
    }

    .wrap {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .wrap-con {
            padding: 10px 0;
            flex-shrink: 0;
            width: 31%;
            margin-right: 2%;

            img {
                border-radius: 10px;
                width: 100%;
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
