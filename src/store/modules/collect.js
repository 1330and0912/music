const state = {
    likeMusic: []
}
const mutations = {
    saveLikeMusic(state, musicInfo) {
        state.likeMusic = musicInfo
    }
}
const actions = {
    saveLikeMusic({commit},musicInfo) {
        commit('saveLikeMusic',musicInfo)
    }
}
const getters = {}

export const collect = {
    namespaced: true,
    state, mutations, actions, getters
}
