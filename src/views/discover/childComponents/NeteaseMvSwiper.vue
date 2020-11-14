<template>
    <div class="netease-mv-swiper">
        <van-swipe autoplay="2300" indicator-color="#FF3A3A"  vertical>
            <van-swipe-item @click="playMV(item.id)" v-for="item in mvData" :key="item.id">
                <img v-lazy="item.cover" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import {getNeteaseMV} from "../../../api";

    export default {
        name: "NeteaseMvSwiper",
        data() {
            return {
                mvData: []
            }
        },
        async created() {
            const {data} = await getNeteaseMV()
            this.mvData = data
        },
        methods:{
            playMV(id){
                this.$router.push(`music-video/${id}`)
            }
        }
    }
</script>

<style lang="less" scoped>
    .netease-mv-swiper {
        height: 160px;
        width: 100%;
        border-radius: 8px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }
    }
</style>
