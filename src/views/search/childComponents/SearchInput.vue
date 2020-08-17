<template>
    <div class="search-input">
        <div @click="back" class="back iconfont icon-zuojiantou"></div>
        <form-input :searchWord="getSearchWord"  inputType="search" @on-search="search" :placeholder="defaultSearchWord" class="inp"/>
    </div>
</template>

<script>
    import FormInput from "components/common/FormInput";
    import {getDefaultSearchWord} from "api";

    import {mapActions,mapGetters} from 'vuex'

    export default {
        name: "SearchInput",
        components: {FormInput},
        data() {
            return {
                defaultSearchWord: '',//默认搜索关键词词
            }
        },
        computed:{
            ...mapGetters('search',['getSearchWord'])
        },
        async created() {
            this.defaultSearchWord = (await getDefaultSearchWord()).data.showKeyword
            console.log(this.defaultSearchWord);
        },
        methods: {
            back() {
                this.$router.back()
            },
            ...mapActions('search', ['setSearchWord','addSearchHistory']),
            search(searchWord) {
                this.setSearchWord(searchWord||this.defaultSearchWord)
                this.addSearchHistory(searchWord||this.defaultSearchWord)
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
        padding: 20px 10px 0;
        background-color: #fff;
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
