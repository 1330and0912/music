<template>
    <div class="lyric-detail">
        <p class="lyric" v-for="(item,index) in lyric">
            {{item}}
        </p>
    </div>
</template>

<script>
    import {getLyric} from "../../../api";

    export default {
        name: "LyricDetail",
        data() {
            return {
                lyric: []
            }
        },
        async created() {
            let res = await getLyric('1463165983')
            this.lyric = res.lrc.lyric.replace(/\[.*?\]/g, '').split('\n')//将歌曲分割为数组
            //console.log(this.lyric);

        }
    }
</script>

<style lang="less" scoped>
    .lyric-detail {
        height: calc(100% - 120px);
        overflow-y: scroll;

        .lyric {
            padding: 10px 0;
            text-align: center;
        }
    }
</style>
