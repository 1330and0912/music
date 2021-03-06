import {SessionData,LocalData} from "../../storage/storage";

let isLogin = SessionData.getItem('profile')
let ids = null
if (isLogin) {
    ids = LocalData.getItem('ids')
}
const state = {
    likeMusic: [],
    ids: ids || []
}
const mutations = {
    saveLikeMusic(state, musicInfo) {
        let isMusic = state.likeMusic.some(item => item.id == musicInfo.id)
        !isMusic && state.likeMusic.push(musicInfo)
    },
    saveIds(state, ids) {
        ids instanceof Array ? state.ids = ids : state.ids.push(ids)
    },
    cancelLikeMusic(state, id) {
        let index = state.ids.findIndex(item => item == id)
        state.ids.splice(index, 1)
        index = state.likeMusic.findIndex(item => item.id == id)
        state.likeMusic.splice(index, 1)
    }
}
const actions = {

    saveIds({commit}, ids) {
        commit('saveIds', ids)
    },
    saveLikeMusic({commit}, musicInfo) {
        commit('saveLikeMusic', musicInfo)
    },
    cancelLikeMusic({commit}, id) {
        commit('cancelLikeMusic', id)
    }
}
const getters = {}

export const collect = {
    namespaced: true,
    state, mutations, actions, getters
}
