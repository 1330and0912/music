const state = {
    recentPlay: [],//最近播放的音乐数据，
    currentMusic: {},//当前播放的歌曲信息
    isPlay: false,//判断是否在播放音乐,
    songUrl: ''//音乐url
}
const mutations = {
    //
    saveRecentPlay(state, payload) {
        state.recentPlay = payload
    },
    //保存当前播放歌曲的信息
    savaCurrentMusicInfo(state, id) {
        state.currentMusic = state.recentPlay.find(item => {
            return item.id === id
        })
    },
    //播放音乐
    playMusic(state) {
        state.isPlay = true
    },
    //保存音乐url
    saveSongUrl(state, songUrl) {
        state.songUrl = songUrl
    }
}

const actions = {
    //获取保存播放音乐数据
    //@recentPlay 最近播放的音乐数据
    saveRecentPlay({commit}, recentPlay) {
        commit('saveRecentPlay', recentPlay)
    },
    //播放音乐
    playMusic({commit, state}, musicInfo) {
      //  console.log(musicInfo);
        commit('savaCurrentMusicInfo', musicInfo.id)
        commit('playMusic')
        commit('saveSongUrl', musicInfo.songUrl)
    }
}
const getters = {
    //获取当前播放歌曲的信息
    getCurrentMusic(state) {
        return state.currentMusic
    },
    //获取当前播放状态
    getIsPlay(state) {
        return state.isPlay
    },
    //获取音乐url
    getSongUrl(state) {
        return state.songUrl
    }

}
export const musicDetail = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
