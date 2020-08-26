import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from '../plugins/toast/index'
import './plugins/vant'
// import FastClick from 'fastclick'
//初始化FastClick实例。在页面的DOM文档加载完成后
// FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(Toast)
//插入方法
Array.prototype.insert = function (index, value, arr = this) {
    let towObj = this.slice(index)
    let val = this.splice(0, index)
    val.push(value)
    val.push(...towObj)
    return val
}
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
