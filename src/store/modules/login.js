import {LocalData,SessionData} from "../../storage/storage";

const isLogin = SessionData.getItem('profile') ? true : false
let uid, profile = null
if (isLogin) {
    profile = SessionData.getItem('profile')
}
uid = profile ? profile.userId : ''
const state = {
    phone: '',
    password: '34040hu*',
    isLogin: isLogin,
    uid: uid,
    profile: null
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
    },
    saveLoginStatus(state, isLogin) {
        state.isLogin = isLogin
        state.profile = SessionData.getItem('profile')
    },
    logout(state) {
        state.profile=null
        state.isLogin = false
        state.uid = ''
        // session.removeItem('profile')
        // local.removeItem('ids')
        // local.removeItem('cookie')

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
        commit('saveUserID', profile.userId)
    },
    setLoginStatus({commit}, isLogin) {
        commit('saveLoginStatus', isLogin)
    },
    //退出登录
    logout({commit}) {
        commit('logout')
    }

}

export const login = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
