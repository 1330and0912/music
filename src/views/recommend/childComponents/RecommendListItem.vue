<template>
    <div ref="item" @click="goMV" class="recommend-list-item">
        <div class="column1">
            <img   ref="img" v-lazy="value.cover" alt="">
            <div class="mv-name">
                {{value.name}}
            </div>
            <div class="mv-info">
                <span>{{value.artistName}}</span>
                <span>{{playCount}}</span>
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
            }
        },
        computed: {
            playCount() {
              return (this.value.playCount/10000).toFixed(1)+'万赞'
            }
        },
        methods: {
            goMV() {
                this.$router.push(`music-video/${this.value.id}`)
            },
        },
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
    .recommend-list-item {
        border-radius: 8px;
        margin-bottom: 10px;
        box-shadow: 0px 0px 11px 1px rgba(0, 1, 33, .3);
        width: 48%;
    }

    .column1 {

        img {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            width: 100%;
        }

        .mv-info {
            padding: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: darkgrey;
            width: 100%;
            border-top: 1px solid rgba(0, 0, 0, .1);

            span {
                font-size: 12px;
            }
        }

        .mv-name {
            font-size: 14px;

            padding: 5px;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
</style>
