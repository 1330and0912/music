<template>
        <div ref="wrap" class="play-queued-list">
            <div ref="item" :key="item.id" @click="playMusic(item)" :class="item.id==getCurrentMusic.id?'current':''"
                 class="item"
                 v-for="(item,index) in getPlayQueuedData">
                <div class="music-info">
                    <template v-if="item.id==getCurrentMusic.id">
                        <van-icon name="volume-o"/>
                    </template>
                    <div class="music-name">
                        {{item.songName}}
                        <span :class="item.id==getCurrentMusic.id?'current':''" class="music-author">
                     - {{item.author}}
                     </span>
                    </div>
                </div>
                <van-icon @click.native.stop="deleteQueuedByIndex(index)" name="cross"/>
            </div>
        </div>

</template>

<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "PlayQueuedList",
        computed: {
            ...mapGetters('musicDetail', ['getPlayQueuedData', 'getCurrentMusic'])
        },

        methods: {
            ...mapActions('musicDetail', ['writePlayQueuedData', 'setCurrentMusic', 'nextSong']),
            playMusic(item) {
                this.setCurrentMusic(item)
            },
            //通过索引删除播放队列歌曲
            deleteQueuedByIndex(index) {
                let value = this.getPlayQueuedData
                if (this.getCurrentMusic.id == value[index].id) {
                    this.nextSong()
                }
                value.splice(index, 1)
                this.writePlayQueuedData(value)
            },
        },
        created() {
            console.log('list');
        }

    }
</script>

<style lang="less" scoped>
    .current {
        color: #FF3A3A !important;
    }

    .play-queued-list {
        height: calc(100% - 100px);
        overflow-y: scroll;
    }

    .item {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        transition: background-color .2s;

        .music-info {
            display: flex;
            align-items: center;

            .van-icon-volume-o {
                margin-right: 5px;
            }

            .music-name {
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                width: 250px;
                font-size: 14px;
            }

            .music-author {
                padding: 0 3px;
                font-size: 12px;
                color: @night-mode-color;
            }
        }

        .van-icon {
            font-size: 20px;
        }

        .van-icon-cross {
            transition: font-size .3s;

            &:active {
                font-size: 24px;
            }
        }

        &:active {
            background-color: rgba(0, 0, 0, .1);
        }
    }
</style>
