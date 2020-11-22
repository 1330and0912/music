<template>
    <div class="search-hot-detail">
        <div class="hot-detail-wrap">
            <div class="h-header">
                热搜榜
            </div>
            <div @click="search(item.searchWord)" :key="item.score" v-for="(item,index) in hotDetail"
                 class="hot-detail-item">
                <div class="index"> {{index+1}}</div>
                <div class="content">
                    <div class="search-word">
                        <div class="music-name">{{item.searchWord}}
                            <img v-if="item.iconUrl"
                                 :class="`icontype-${item.iconType}`"
                                 :src="item.iconUrl" alt="">
                        </div>
                        <div class="lyric">
                            {{item.content}}
                        </div>
                    </div>
                </div>
                <div class="score">{{item.score}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getSearchHotDetail} from "api";

    import {mapActions} from 'vuex'

    export default {
        name: "SearchHotDetail",
        data() {
            return {
                hotDetail: []
            }
        },
        async created() {
            this.hotDetail = (await getSearchHotDetail()).data
        },
        methods: {
            ...mapActions('search', ['setSearchWord', 'addSearchHistory']),
            search(searchWord) {
                if (this.$route.path !== '/search/search-result') {
                    this.$router.push({
                        path: 'search-result',
                    })
                    this.setSearchWord(searchWord)
                    this.addSearchHistory(searchWord)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .icontype-1 {
        width: 30px;
        height: 16px;
    }

    .icontype-0 {
        width: 30px;
        height: 16px;
    }

    .icontype-5 {
        width: 16px;
        height: 20px;
    }

    .icontype-2 {
        width: 36px;
        height: 20px;
    }

    .search-hot-detail {
        background-color: @content-color;
        margin-top: 10px;
    }

    .hot-detail-wrap {
        .h-header {
            font-weight: bold;
            margin-bottom: 10px;
            padding: 0px 10px;
            color: @night-mode-height-color;
        }

        .hot-detail-item {
            display: flex;
            align-items: center;
            padding: 10px 10px;
            transition: background-color .3s;

            &:active {
                background-color: rgba(0, 0, 0, .1);
            }

            &:nth-child(-n+4) {
                .index {
                    color: #FF3A3A;
                }

                .content {
                    .search-word {
                        font-weight: bold;

                        .lyric {
                            font-weight: normal;
                            margin-top: 5px;
                            font-size: 14px;
                        }
                    }
                }
            }

            .index {
                text-align: center;
                flex: 1;
                color: @night-mode-height-color;
            }

            .content {
                flex: 10;
                padding: 0 10px;
                color: @night-mode-height-color;

                .search-word {
                    .music-name {
                        font-size: 16px;
                    }

                    img {
                        vertical-align: middle;
                        margin-left: 3px;
                        margin-bottom: 3px;
                    }

                    .lyric {
                        color: @night-mode-color;
                        margin-top: 5px;
                        font-size: 13px;
                    }
                }
            }

            .score {
                text-align: center;
                flex: 3;
                color: darkgray;
            }

        }
    }
</style>
