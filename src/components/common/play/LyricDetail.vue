<template>
    <div class="lyric-detail">
        <p class="lyric" v-for="(item,index) in lyricArr">
            {{item.lyricStr}}
        </p>

    </div>
</template>

<script>
    import {getLyric} from "api";
    import {dataLyric} from "common/dataLyric";

    export default {
        name: "LyricDetail",
        data() {
            return {
                lyric: [],
                lyricDuration: [],
                lyricArr: []
            }
        },
        async created() {
            let res = await getLyric('64561')
            //将歌曲时间和歌词分割为两个数组
            // this.lyric = res.lrc.lyric.replace(/\[.*?\]/g, '').trim().split('\n')
            // this.lyricDuration = res.lrc.lyric.replace(/[\u4e00-\u9fa5 | a-z|A-Z |\[|\]|:|,]/g, '').trim().split('\n')            // this.lyricDuration = res.lrc.lyric.replace(/[\u4e00-\u9fa5 | a-z|A-Z |\[|\]|:|,]/g, ',')
            // //把时间转换为秒
            // this.lyricDuration = this.lyricDuration.map(item => {
            //     return item.slice(0, 2) * 60 + Number(item.slice(2))
            // })
            // this.lyric.forEach((item, index) => {
            //     this.lyricArr.push({
            //         lyricStr: item,
            //         duration: this.lyricDuration[index]
            //     })
            // })
            this.lyricArr = dataLyric(res.lrc.lyric)
            console.log(this.lyricArr);
        },
        computed: {},

    }
</script>

<style lang="less" scoped>
    .lyric-detail {
        position: relative;
        z-index: 999;
        width: 100%;
        height: calc(100% - 400px);
        overflow: scroll;

        .lyric {
            padding: 10px 0;
            text-align: center;
        }

    }
</style>
