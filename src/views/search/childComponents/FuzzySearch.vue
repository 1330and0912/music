<template>
    <ul v-if="showList" class="fuzzy-search">
        <li @click="search(item.keyword)" class="item" :key="index" v-for="(item,index) in fuzzyData">
            <i class="iconfont icon-sousuo"></i>
            <span>{{item.keyword}}</span>
        </li>
    </ul>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "FuzzySearch",
        props: ['fuzzy-data'],
        data() {
            return {
                showList: true
            }
        },
        watch: {
            fuzzyData() {
                this.showList = true
            }
        },
        methods: {
            ...mapActions('search', ['setSearchWord', 'addSearchHistory']),
            search(searchWord) {
                this.showList = false
                if (this.$route.path !== '/search/search-result') {
                    this.$router.push({
                        path: 'search-result',
                    })
                    this.setSearchWord(searchWord)
                    this.addSearchHistory(searchWord)
                } else {
                    this.setSearchWord(searchWord)
                    this.addSearchHistory(searchWord)
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .fuzzy-search {
        width: 100%;
        background-color: white;
        position: fixed;
        top: 49px;
        left: 0;
        right: 0;
        box-shadow: 1px 1px 11px darkgrey;
    }

    .item {
        border-bottom: 1px solid rgba(0, 0, 0, .1);
        padding: 10px 10px;
        display: flex;
        align-items: center;

        span {
            font-size: 16px;
        }

        i {
            padding-right: 5px;
            font-size: 24px;
        }
    }
</style>
