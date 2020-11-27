<template>
    <div :class="musicInfo.id==getCurrentMusic.id?'current-play-music':''"
         @click="songPlay(musicInfo.id)"
         class="music-list-item">

        <div class="music-info">
            <img v-lazy="musicInfo.bg+'?param=100y100'" alt="">
            <div>
                <div class="music-name">
                    {{musicInfo.songName}}
                </div>
                <div class="music-author">
                    {{musicInfo.author}}
                </div>
            </div>
        </div>
        <div class="icon">
            <i @click.stop="goMV(musicInfo.mvid)" v-if="musicInfo.mvid" class="go-mv iconfont icon-bofang1"></i>
            <i class=" iconfont icon-ziyuan"></i>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import {getSongURL} from "api";

    export default {
        name: "MusicListItem",
        props: {
            musicInfo: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {
            ...mapGetters('musicDetail', ['getCurrentMusic'])
        },
        created() {
        },
        methods: {
            ...mapActions('musicDetail', ['playMusic', 'writePlayQueuedData']),
            async songPlay(id) {
                let url = (await getSongURL(id)).data[0].url || ''
                if (url) {
                    this.playMusic(this.musicInfo)
                    console.log(this.musicInfo);

                } else {
                    this.$toast.success(`该歌曲无版权`)
                }
            },
            goMV(mvid) {
                setTimeout(() => {
                    this.$router.push(`music-video/${mvid}`)
                }, 300)
            }
        }
    }
</script>

<style lang="less" scoped>
    .current-play-music {
        background-color: rgba(2, 2, 110, .1);
    }

    .music-list-item {
        width: 100%;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // border-bottom: 1px solid rgba(0, 0, 0, .2);

        &:active {
            background-color: rgba(0, 0, 0, .1);
        }


        .music-info {
            display: flex;
            align-items: center;

            img {
                margin-right: 10px;
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }

            .music-name {
                color: @night-mode-height-color;
                font-size: 14px;
                width: 200px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .music-author {
                font-size: 12px;
                padding-top: 3px;
                color: #57748D;
            }
        }

        .icon {
            display: flex;
            align-items: center;
            color: @night-mode-color;
            transition: .3s;
            justify-content: space-between;

            &:active {
                transform: scale(1.5);
            }

            i {
                color: rgba(0,0,0,.5);
                font-size: 20px;
                width: 20px;
                &:last-child {
                    font-size:  22px;
                }
            }


        }

    }
</style>
