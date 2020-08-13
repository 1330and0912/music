import {random} from 'lodash'

const state = {
    recentPlay: [],//最近播放的音乐数据，
    currentMusic: {},//当前播放的歌曲信息
    isPlay: false,//判断是否在播放音乐,
    songUrl: '',//音乐url,暂时未用到该状态
    currentTime: 0,//当前播放时间
    isPlayEnd: false,//是否播放结束
    playMode: 0,//播放模式 0：列表循环 1：单曲循环 2：随机播放
    duration: 0,//音乐总时长,
    progressValue: 0//设置进度条滚动值
}
const mutations = {
    //保存用户已播放过的音乐
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
    },
    //切换播放状态
    toggleMusicState(state) {
        state.isPlay = !state.isPlay
    },
    //保存当前播放时间
    saveCurrentTime(state, time) {
        state.currentTime = time
    },
    //上一曲
    prevSong(state, index) {
        state.isPlay = true
        state.currentMusic = state.recentPlay[index]
    },
    //下一曲
    nextSong(state, index) {
        state.isPlay = true
        state.currentMusic = state.recentPlay[index]
    },
    //修改播放模式
    alterPlayMode(state, mode) {
        state.playMode = mode
    },
    // 随机播放模式
    randomPlay(state, index) {
        state.currentMusic = state.recentPlay[index]
    },
    // 保存音乐时长
    saveMusicDuration(state, duration) {
        state.duration = duration
    },
    //保存进度条滚动值
    saveProgressValue(state, value) {
        state.progressValue = value
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
        commit('savaCurrentMusicInfo', musicInfo.id)
        commit('playMusic')
        commit('saveSongUrl', musicInfo.songUrl)
    },
    //切换播放状态
    toggleMusicState({commit}) {
        commit('toggleMusicState')
    },
    //获取当前播放时间
    getCurrentTime({commit}, time) {
        commit('saveCurrentTime', time)
    },
    // 上一曲
    prevSong({commit, state}) {
        let index = state.recentPlay.findIndex(item => item.id == state.currentMusic.id) - 1
        index = index < 0 ? state.recentPlay.length - 1 : index
        commit('prevSong', index)
    },
    // 下一曲
    nextSong({commit, state}) {
        let index = state.recentPlay.findIndex(item => item.id == state.currentMusic.id) + 1
        index = index > state.recentPlay.length - 1 ? 0 : index
        commit('nextSong', index)
    },
    //修改播放模式
    alterPlayMode({commit}, mode) {
        commit('alterPlayMode', mode)
    },
    // 播放模式
    randomPlay({commit, state}) {
        let index = random(0, state.recentPlay.length - 1)
        commit('randomPlay', index)
    },
    // 获取音乐时长
    getMusicDuration({commit}, duration) {
        commit('saveMusicDuration', duration)
    },
    //设置进度条滚动值
    setProgressValue({commit}, value) {
        commit('saveProgressValue', value)
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
    },
    // 获取当前播放时间
    getCurrentMusicPlayTime(state) {
        return state.currentTime
    },
    //获取播放模式
    getPlayMode(state) {
        return state.playMode
    },
    //获取音乐时长
    getDuration(state) {
        return state.duration
    },
    //设置进度条滚动值
    getProgressValue() {
        return state.progressValue
    }
}
export const musicDetail = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
