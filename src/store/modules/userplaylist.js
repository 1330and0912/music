const state = {
    userPlaylist: [
        {
            detail:[],
            name:'',
            img:''
        }
    ]
}
const mutations = {
    saveUserPlaylist(state, {name,img,index,detial}) {
        state.userPlaylist.detail.push(detial)
    }
}
const actions = {
    addUserPlaylist({commit, state}, {name,img,index,detial}) {
        return new Promise((reslove, reject) => {
            let index = state.userPlaylist[index].detail.findIndex(item => item.id == detial.id)
            if (index == -1) {
                commit('saveUserPlaylist', {name,img,index,detial})
                reslove('添加成功')
            } else {
                reject('该歌曲已存在')
            }
        })
    }
}
const getters = {
    getUserPlaylistCount(state) {
       // return state.userPlaylist.count
    }
}
export const userPlayList = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
