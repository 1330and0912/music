import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from '../plugins/toast/index'
// import './plugins/vant'
Vue.use(vant.Lazyload,{
    loading: require('./assets/img/vload.jpg'),
});
Vue.config.productionTip = false
Vue.use(Toast)
import {LocalData, SessionData} from "./storage/storage";
Vue.prototype.LocalData = LocalData
Vue.prototype.SessionData = SessionData
//插入方法
Array.prototype.insert = function (value, index) {
    let that = this
    let newVal = that.slice(0, index - 1)
    newVal.push(value)
    newVal.push(...that.slice(index - 1))
     return newVal
};

router.beforeEach((to, from, next) => {
    if (to.meta.isLogin) {
        if (!store.state.login.isLogin) {
            return next('/login')
        }
    }
    next()
})

Vue.directive('focus', {
    inserted(el) {
        el.focus()
    }
})
Vue.prototype.$eventBus = new Vue()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
