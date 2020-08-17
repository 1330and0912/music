const state = {
    searchWord: '123',//搜索关键词
    searchHistory: []//搜索记录
}
const mutations = {
    //保存搜索关键词
    saveSearchWord(state, searchWord) {
        state.searchWord = searchWord
    },
    //保存搜索记录
    saveSearchHistory(state, searchHistory) {
        if (searchHistory instanceof Array && searchHistory.length!= 0) {
            state.searchHistory.push(...searchHistory)
        } else {
            let index = state.searchHistory.findIndex(item => item.trim() == searchHistory.trim())
            if (index === -1) {
                state.searchHistory.unshift(searchHistory)
            } else {
                state.searchHistory.splice(index, 1)
                state.searchHistory.unshift(searchHistory)
            }
            window.localStorage.searchHistory = JSON.stringify(state.searchHistory)
        }
    },
    // 删除搜索记录
    deleteAllSearchHistory(state) {
        state.searchHistory.splice(0)
    },
    //删除某一个搜索记录
    deleteSearchHistoryByIndex(state, index) {
        state.searchHistory.splice(index,1)
    },
}
const actions = {
    //设置搜索关键词
    setSearchWord({commit}, searchWord) {
        commit('saveSearchWord', searchWord)
    },
    //添加搜索记录
    addSearchHistory({commit}, searchHistory) {
        commit('saveSearchHistory', searchHistory)
    },
    // 删除搜索记录
    //如果index == -1 则删除所有记录
    deleteSearchHistory({commit}, index) {
        if (index == -1) {
            commit('deleteAllSearchHistory')
            window.localStorage.removeItem('searchHistory')
        } else {
            commit('deleteSearchHistoryByIndex')
        }
    }

}
const getters = {
    //获取搜索关键词
    getSearchWord(state) {
        return state.searchWord
    },
    //获取搜索记录
    getSearchHistory(state) {
        return state.searchHistory
    }

}


export const search = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
