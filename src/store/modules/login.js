//函数返回对象方式
// const state = () => ({
//     phone: '',
//     password: ''
// })
// 对象方式
const state = {
    phone: '',
    password: ''
}
const mutations = {
    savePhone(state, phone) {
        state.phone = phone
    },
    savePassword(state, password) {
        state.password = password
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

}

export const login = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
