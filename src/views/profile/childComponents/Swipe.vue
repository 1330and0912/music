<template>
    <div class="swpie">
        <van-swipe :autoplay="3000"  >
            <van-swipe-item v-for="(image, index) in banner" :key="index">
                <img v-lazy="image"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    import {getBanner} from "../../../api";

    export default {
        name: "Swipe",
        data() {
            return {
                banner: []
            }
        },
        async created() {
            const {banners: res} = await getBanner()
            res.map(item => {
                this.banner.push(item.pic)
            })
         //   console.log(this.banner);
        }
    }
</script>

<style lang="less" scoped>
    .swpie {
        padding: 0 20px;
    }

    .van-swipe {
        border-radius: 6px;
        overflow: hidden;

        img {
            border-radius: 6px;
            width: 100%;
            height: 160px;
        }
    }

</style>
