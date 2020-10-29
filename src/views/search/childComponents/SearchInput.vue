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
    </div>
</template>

<script>
    import FormInput from "components/common/FormInput";
    import {getDefaultSearchWord} from "api";

    import {mapActions, mapGetters} from 'vuex'
    import {getSearchSuggest} from "../../../api";
    import {debounce} from "../../../common/debounce";

    export default {
        name: "SearchInput",
        components: {FormInput},
        data() {
            return {
                defaultSearchWord: '',//默认搜索关键词词
                debounceFn: null,
                searchSuggestList: []
            }
        },
        computed: {
            ...mapGetters('search', ['getSearchWord'])
        },
        activated() {
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
            getSuggest(v) {
                getSearchSuggest(v).then(res => {
                    console.log(res);
                    this.searchSuggestList = res.result.allMatch
                })
            },
            getSearchSuggestData(v) {
                this.debounceFn = debounce(this.getSuggest, 1000, v)
                this.debounceFn()
            }
        }
    }
</script>

<style lang="less" scoped>
    .search-input {
        padding: 0px 10px 0;
        height: 49px;
        background-color: #009966;
        position: fixed;
        z-index: 9999;
        top: 0px;
        left: 0px;
        right: 0px;
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
