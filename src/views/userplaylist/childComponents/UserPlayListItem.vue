<template>
    <div class="list-item" @click="openUserPlaylist(list)">
        <div class="info">
            <img :src="list.img+'?param=70y70'" alt="">
            <div class="text">
                <div class="name">{{list.name}}</div>
                <div class="count">{{list.detail.length}}首</div>
            </div>
        </div>
        <div class="edit" @click.stop="edit">
            <van-icon name="ellipsis"/>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'


    export default {
        name: "UserPlayListItem",
        props: {
            list: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            edit() {
                this.$emit('edit', this.list)
            },
            //打开歌单
            openUserPlaylist({name}) {
                this.$router.push({
                    name:'userPlaylistName',
                    params:{name}
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .list-item {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 10px 10px;
        justify-content: space-between;
    }

    img {
        width: 70px;
        border-radius: 10px;
        margin-right: 20px;
    }

    .info {
        display: flex;
        align-items: center;

        .name {
            width: 160px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
            color: black;
            margin-bottom: 7px;
        }

        .count {
            font-size: 13px;
            color: rgba(0, 0, 0, .5);
        }
    }

    .edit {
        font-size: 26px;
        color: rgba(0, 0, 0, .5);
        justify-self: start;
        transition: all .3s;

        &:active {
            transform: scale(2);
        }
    }
</style>
