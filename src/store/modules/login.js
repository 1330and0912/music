//函数返回对象方式
// const state = () => ({
//     phone: '',
//     password: ''
// })
// 对象方式

const state = {
    phone: '',
    password: '',
    isLogin: false,
    uid: ''
}
const mutations = {
    savePhone(state, phone) {
        state.phone = phone
    },
    savePassword(state, password) {
        state.password = password
    },
    saveUserID(state, uid) {
        state.uid = uid
    }
}
const getters = {
    getUserInfo({phone, password}) {
        return {
            phone,
            password
        }
    }
}
const actions = {
    //保存电话号码
    savePhone(context, phone) {
        context.commit('savePhone', phone)
    },
    //保存密码
    savePassword(context, password) {
        context.commit('savePassword', password)
    },
    setUid({commit}) {
        let profile = JSON.parse(window.sessionStorage.getItem('profile'))
        commit('saveUserID',profile.userId)
    }

}

export const login = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
