const state = {
    likeMusic: [],
    ids: []
}
const mutations = {
    saveLikeMusic(state, musicInfo) {
        let isMusic = state.likeMusic.some(item => item.id == musicInfo.id)
        !isMusic && state.likeMusic.push(musicInfo)
    },
    saveIds(state, ids) {
        if (ids instanceof Array) {
            state.ids.push(...ids)
        } else {
            state.ids.push(ids)
        }
    },
    cancelLikeMusic(state, id) {
        let index = state.ids.findIndex(item => item == id)
        console.log(index);
        state.ids.splice(index, 1)
        index = state.likeMusic.findIndex(item => item.id == id)
        console.log(index);
        state.likeMusic.splice(index, 1)
    }
}
const actions = {
    saveLikeMusic({commit}, musicInfo) {
        commit('saveLikeMusic', musicInfo)
    },
    saveIds({commit}, ids) {
        commit('saveIds', ids)
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
