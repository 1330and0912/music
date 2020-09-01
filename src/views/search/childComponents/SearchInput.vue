<template>
    <div class="search-input">
        <div @click="back" class="back iconfont icon-zuojiantou"></div>
        <form-input
                inputType="search" @on-search="search"
                :placeholder="defaultSearchWord"
                class="inp"
        />
    </div>
</template>

<script>
    import FormInput from "components/common/FormInput";
    import {getDefaultSearchWord} from "api";

    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "SearchInput",
        components: {FormInput},
        data() {
            return {
                defaultSearchWord: '',//默认搜索关键词词
            }
        },
        computed: {
            ...mapGetters('search', ['getSearchWord'])
        },
        activated() {
            console.log(123);
        },
        async created() {
            this.defaultSearchWord = (await getDefaultSearchWord()).data.showKeyword
            console.log(this.defaultSearchWord);
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
            }
        }
    }
</script>

<style lang="less" scoped>
    .search-input {
        padding: 0px 10px 0;
        height: 49px;
        background-color: @header-color;
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
        }
    }
</style>
