import Vue from 'vue'
import Vuex from 'vuex'
import {login} from "./modules/login";
import {musicDetail} from "./modules/music-detail";
import {search} from './modules/search'
import {collect} from './modules/collect'
import {userPlayList} from "./modules/userplaylist";
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        isShowLoading: false,//显示加载动画
        isShowPlayBar: false,//显示微播放器
    },
    mutations: {},
    actions: {},
    modules: {
        login,
        musicDetail,
        search,
        collect,
        userPlayList
    }
})
