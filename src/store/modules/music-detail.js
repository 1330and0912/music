import {random} from 'lodash'
import {LocalData} from "../../storage/storage";

const recent = LocalData.getItem('recentPlay') || []
const state = {
    recentPlay: recent,//最近播放的音乐数据，
    currentMusic: {},//当前播放的歌曲信息
    isPlay: false,//判断是否在播放音乐,
    currentTime: 0,//当前播放时间
    isPlayEnd: false,//是否播放结束
    playMode: 0,//播放模式 0：列表循环 1：单曲循环 2：随机播放
    duration: 1,//音乐总时长,
    progressValue: 0,//设置进度条滚动值,
    playQueuedData: []//播放队列音乐数据
}
const mutations = {
    //保存用户已播放过的音乐
    saveRecentPlay(state, musicInfo) {
        let index = state.recentPlay.findIndex(item =>item.id==musicInfo.id)
        if(index==-1){
            state.recentPlay.push(musicInfo)
            LocalData.setItem('recentPlay',state.recentPlay)
        }
    },
    //保存当前播放歌曲的信息
    savaCurrentMusicInfo(state, musicInfo) {
        state.currentMusic = musicInfo
        window.localStorage.currentMusic = JSON.stringify(musicInfo)
    },
    //播放音乐
    playMusic(state) {
        state.isPlay = true
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
        state.currentMusic = state.playQueuedData[index]
        window.localStorage.currentMusic = JSON.stringify(state.currentMusic)
    },
    //下一曲
    nextSong(state, index) {
        state.isPlay = true
        state.currentMusic = state.playQueuedData[index]
        window.localStorage.currentMusic = JSON.stringify(state.currentMusic)

    },
    //修改播放模式
    alterPlayMode(state, mode) {
        state.playMode = mode
    },
    // 随机播放模式
    randomPlay(state, index) {
        state.currentMusic = state.playQueuedData[index]
        window.localStorage.currentMusic = JSON.stringify(state.currentMusic)
    },
    // 保存音乐时长
    saveMusicDuration(state, duration) {
        state.duration = duration
    },
    //保存进度条滚动值
    saveProgressValue(state, value) {
        state.progressValue = value
    },
    // 保存播放队列音乐数据
    savePlayQueuedData(state, value) {
        state.playQueuedData = value
        LocalData.setItem('playQueuedData', value)
    }
}
const actions = {
    //播放音乐
    playMusic({commit, state}, musicInfo) {
        commit('savaCurrentMusicInfo', musicInfo)
        commit('playMusic')
        commit('saveRecentPlay',musicInfo)
        let data
        if (LocalData.getItem('playQueuedData')) {
            data = LocalData.getItem('playQueuedData')
        } else {
            data = []
        }
        let index = data.findIndex(item => item.id == state.currentMusic.id)
        let currentIndex = data.findIndex(item => item.id == state.currentMusic.id)
        if (index == -1) {
            if (data.length >= 2) {
                data = data.insert(musicInfo, currentIndex)
            } else {
                data.push(musicInfo)
            }
        }
        commit('savePlayQueuedData', data)
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
        let index
        if (state.playMode == 2) {
            index = random(0, state.playQueuedData.length - 1)
        } else {
            index = state.playQueuedData.findIndex(item => item.id == state.currentMusic.id) - 1
            index = index < 0 ? state.playQueuedData.length - 1 : index
        }
        commit('prevSong', index)
    },
    // 下一曲
    nextSong({commit, state}) {
        let index
        if (state.playMode == 2) {
            index = random(0, state.playQueuedData.length - 1)
        } else {
            index = state.playQueuedData.findIndex(item => item.id == state.currentMusic.id) + 1
            index = index > state.playQueuedData.length - 1 ? 0 : index
        }
        commit('nextSong', index)
    },
    //修改播放模式
    alterPlayMode({commit}, mode) {
        commit('alterPlayMode', mode)
    },
    // 随机播放模式
    randomPlay({commit, state}) {
        let index = random(0, state.playQueuedData.length - 1)
        commit('randomPlay', index)
    },
    // 获取音乐时长
    getMusicDuration({commit}, duration) {
        commit('saveMusicDuration', duration)
    },
    //设置进度条滚动值
    setProgressValue({commit}, value) {
        commit('saveProgressValue', value)
    },
    //写入播放队列数据
    writePlayQueuedData({commit}, value) {
        commit('savePlayQueuedData', value)
    },
    setCurrentMusic({commit}, musicInfo) {
        commit('savaCurrentMusicInfo', musicInfo)
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
    //获取进度条滚动值
    getProgressValue(state) {
        return state.progressValue
    },
    //获取播放队列数据
    getPlayQueuedData(state) {
        return state.playQueuedData
    }
}
export const musicDetail = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
