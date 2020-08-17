<template>
    <div class="search-history">
        <div class="h-header">
            <p>历史记录</p>
            <van-icon @click="deleteSearchAllHistory" name="delete" size="26" color="#cccccc"/>
        </div>
        <div class="h-content">
            <span @click="search(item)" v-for="item in getSearchHistory">{{item}} </span>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "SearchHistory",
        computed: {
            ...mapGetters('search', ['getSearchHistory'])
        },
        methods: {
            ...mapActions('search', ['setSearchWord', 'addSearchHistory', 'deleteSearchHistory']),
            search(searchWord) {
                if (this.$route.path !== '/search/search-result') {
                    this.$router.push({
                        path: 'search-result',
                    })
                    this.setSearchWord(searchWord)
                    this.addSearchHistory(searchWord)
                }
            },
            deleteSearchAllHistory() {
                this.$dialog.confirm({
                    title:'删除所有搜索记录',
                    showCancelButton:true
                }).then(()=>{
                    this.deleteSearchHistory(-1)
                }).catch(()=>{
                    this.$toast.success('取消成功')
                })
            }
        },
        created() {
            let searchHistory = JSON.parse(window.localStorage.getItem('searchHistory'))
            searchHistory && this.addSearchHistory(searchHistory);
        }
    }
</script>

<style lang="less" scoped>
    .search-history {
        padding: 80px 10px 0;

        .h-header {
            display: flex;
            align-items: center;
            justify-content: space-between;

            p {
                font-weight: bold;
            }

            .van-icon {
                transition: color .3s;

                &:active {
                    color: rgba(0, 0, 0, 1) !important;
                }
            }
        }

        .h-content {
            overflow-x: scroll;
            padding-top: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            &::-webkit-scrollbar {
                /*隐藏滚轮*/
                display: none;
            }

            span {
                padding: 10px;
                margin-left: 5px;
                background-color: rgba(0, 0, 0, .1);
                border-radius: 40%;
                transition: background-color .3s;
                height: 40px;
                white-space: nowrap;

                &:active {
                    background-color: rgba(0, 0, 0, .3);

                }
            }
        }

    }
</style>
