import {LocalData} from "../../storage/storage";

const det = LocalData.getItem('userPlaylist') || []
const state = {
    userPlaylist: det
}
const mutations = {
    //保存歌单歌曲
    savePlaylistDetail(state, {exists, detail}) {
        exists.forEach(item => {
            state.userPlaylist[item.item].detail.push(detail)
            state.userPlaylist[item.item].img = state.userPlaylist[item.item].detail[0].bg
        })
        LocalData.setItem('userPlaylist', state.userPlaylist)
    },
    //保存创建的歌单
    savePlayList(state, {name, img}) {
        state.userPlaylist.unshift({name, img, detail: []})
        LocalData.setItem('userPlaylist', state.userPlaylist)
    },
    //删除歌单
    deletePlaylistByName(state, index) {
        state.userPlaylist.splice(index, 1)
        LocalData.setItem('userPlaylist', state.userPlaylist)
    }
}
const actions = {
    //添加歌单歌曲
    addUserPlaylistDetail({commit, state}, {detail, selectPlaylistName}) {
        return new Promise(resolve => {
            let playlistIndex = [], exists = []
            //判断用户选中的歌单 获取其所在位置索引
            selectPlaylistName.forEach(item => {
                let index = state.userPlaylist.findIndex(v => v.name == item)
                index !== -1 && playlistIndex.push(index)
            })
            //得到一个数组用来添加歌曲 e表示是否已有该歌曲
            playlistIndex.forEach(item => {
                //找到了相同id e为true代表歌曲已存在，否则为false
                let e = state.userPlaylist[item].detail.some(v => v.id == detail.id)
                exists.push({item, exists: e})
            })
            //有不存在的歌曲则表示可以添加
            let isSuccess = exists.some(item => !item.exists)
            if (isSuccess) {
                //把需要添加歌曲的歌单索引筛选出来
                exists = exists.filter(item => !item.exists)
                commit('savePlaylistDetail', {exists, detail})
                resolve('添加成功')
            } else {
                resolve('歌曲已存在')
            }
        })

    },
    //创建歌单
    createPlayList({commit, state}, {name, img}) {
        return new Promise((resolve, reject) => {
            let exists = state.userPlaylist.findIndex(item => item.name == name)
            if (exists == -1) {
                commit('savePlayList', {name, img})
                resolve('创建成功')
            } else {
                resolve('该歌单已存在')
            }
        })
    },
    //删除歌单
    deletePlaylist({commit, state}, name) {
        let index = state.userPlaylist.findIndex(item => item.name == name)
        commit('deletePlaylistByName', index)
    }
}
const getters = {
    getUserPlaylistByName(state) {
        return function (name) {
            return state.userPlaylist.filter(item => item.name == name)||[]
        }
    }
}
export const userPlayList = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
