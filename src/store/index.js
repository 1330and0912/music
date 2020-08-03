import Vue from 'vue'
import Vuex from 'vuex'
import {login} from "./modules/login";
import {musicDetail} from "./modules/music-detail";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        login,
        musicDetail
    }
})
