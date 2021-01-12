<template>
    <div class="sw">
        <swiper :options="swiperOptions">
            <swiper-slide @click.native="playMV(item.id)" :key="item.id"
                          v-for="item in mvData">
                <img v-lazy="item.cover+'?param=400y200'" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    import {getNeteaseMV} from "../../../api";
    import "swiper/dist/css/swiper.css";
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "NeteaseMvSwiper",
        components:{swiper,swiperSlide},
        data() {
            return {
                mvData: [],
                swiperOptions: {
                    speed:1000,
                    autoplay: {
                        disableOnInteraction: false,
                        delay:800
                    },
                    loop: true,
                    slidesPerView: 1,
                    effect : 'cube',
                }
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
    .sw {
        width: 100%;
    }
    .swiper-container{
        height: 160px;
        img{
            width: 100%;
            height: 160px;
            border-radius: 10px;
        }
    }
</style>
