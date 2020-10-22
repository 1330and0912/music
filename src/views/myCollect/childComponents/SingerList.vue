<template>
    <div class="singer-list" >
        <div @click="goSingerDetail(item.id)" class="singer-list-item" v-for="item in singerList" :key="item.id">
            <img :src="item.picUrl" alt="">
            <div class="singer-info">
                <div class="singer-name">{{item.name}}</div>
                <div class="info">{{item.info}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SingerList",
        props: {
            singerList: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            goSingerDetail(id) {
                this.$router.push(`/singer-detail/${id}`)
            }

        }
    }
</script>

<style lang="less" scoped>
    .singer-list {

    }

    .singer-list-item {
        line-height: 20px;
        display: flex;
        align-items: center;
        padding: 10px;
        transition: background-color .3s;

        &:active {
            background-color: rgba(0, 0, 0, .1);
        }

        img {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .singer-info {
            color: #000000;

            .info {
                font-size: 12px;
                color: rgba(0, 0, 0, .6);
            }
        }
    }
</style>
