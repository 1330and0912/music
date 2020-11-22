<template>
    <div class="search-input">
        <div @click="back" class="back iconfont icon-zuojiantou"></div>
        <form-input
                caret="black"
                border-color="white"
                inputType="search" @on-search="search"
                :placeholder="defaultSearchWord"
                class="inp"
                @input-value="getSearchSuggestData"
        />
        <fuzzy-search :fuzzy-data="searchSuggestList"/>
    </div>
</template>

<script>
    import FormInput from "components/common/FormInput";
    import {getDefaultSearchWord} from "api";

    import {mapActions, mapGetters} from 'vuex'
    import {getSearchSuggest} from "../../../api";
    import {debounce} from "../../../common/debounce";
    import FuzzySearch from "./FuzzySearch";

    export default {
        name: "SearchInput",
        components: {FuzzySearch, FormInput},
        data() {
            return {
                defaultSearchWord: '',//默认搜索关键词词
                debounceFn: null,
                searchSuggestList: [],
                fuzzySearch: '',
                cancelSearch: false
            }
        },
        watch: {
            $route(to, from) {
                this.cancelSearch = true
            }
        },
        computed: {
            ...mapGetters('search', ['getSearchWord'])
        },
        async created() {
            this.defaultSearchWord = (await getDefaultSearchWord()).data.showKeyword
        },
        methods: {
            back() {
                this.$router.back()
            },
            ...mapActions('search', ['setSearchWord', 'addSearchHistory']),
            search(searchWord) {
                this.searchSuggestList = []
                this.cancelSearch = true
                if (searchWord.trim()) {
                    this.setSearchWord(searchWord)
                    this.addSearchHistory(searchWord)
                } else {
                    this.setSearchWord(this.defaultSearchWord)
                    this.addSearchHistory(this.defaultSearchWord)
                }
                if (this.$route.path !== '/search/search-result') {
                    this.$router.push({
                        path: 'search-result',
                    })
                }
            },
            getSuggest() {
                if (this.fuzzySearch.length !== 0) {
                    getSearchSuggest(this.fuzzySearch).then(res => {
                        if (this.cancelSearch) {
                            this.cancelSearch = false
                        } else {
                            this.searchSuggestList = res.result.allMatch
                        }
                    })
                } else {
                    this.searchSuggestList = []
                }
            },
            getSearchSuggestData(v) {
                this.fuzzySearch = v
                !this.debounceFn && (this.debounceFn = debounce(this.getSuggest, 100))
                this.debounceFn()
            }
        }
    }
</script>

<style lang="less" scoped>
    .search-input {
        padding: 0px 10px 0;
        height: 49px;
        background-color: #FF3A3A;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .inp {
            padding: 0 0 0 10px;
        }

        .iconfont {
            font-size: 32px;
            color: white;
        }
    }
</style>
