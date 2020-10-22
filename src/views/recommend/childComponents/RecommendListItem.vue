<template>
    <div ref="item" @click="goMV" class="recommend-list-item">
        <div class="column1">
            <img :style="{height:height}" @load="setImgHeight" ref="img" :src="value.cover" alt="">
            <div class="mv-name">
                {{value.name}}
            </div>
            <div class="mv-info">
                <span>{{value.artistName}}</span>
                <span>{{value.playCount}}赞</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendListItem",
        props: {
            value: {
                type: Object,
                default: () => ({})
            }
        },
        data() {
            return {
                height: 0,
                ratio: 0,
            }
        },
        methods: {
            goMV() {
                this.$router.push(`music-video/${this.value.id}`)
            },
            setImgHeight() {
                this.ratio = (this.$refs.img.clientWidth / this.$refs.img.naturalWidth).toFixed(1)
                this.height = this.ratio * this.$refs.img.naturalHeight + 'px'
                this.$nextTick(() => {
                    this.$emit('setItemPosition', this.$refs.item.clientHeight)
                })
            }
        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
    .recommend-list-item {
        position: absolute;
        border-radius:8px;
        margin-bottom: 15px;
        box-shadow: 1px 1px 4px darkslategrey;
        width: 46%;
    }

    .column1 {

        img {
            border-top-left-radius:8px;
            border-top-right-radius:8px;
            width: 100%;
        }

        .mv-info {
            padding: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: darkgrey;
            width: 100%;

        }

        .mv-name {
            padding: 5px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
