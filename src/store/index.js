import Vue from 'vue'
import Vuex from 'vuex'
import {login} from "./modules/login";
import {musicDetail} from "./modules/music-detail";
import {search} from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isShowLoading: false
    },
    mutations: {},
    actions: {},
    modules: {
        login,
        musicDetail,
        search
    }
})
