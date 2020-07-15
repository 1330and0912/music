import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from '../plugins/toast/index'

Vue.config.productionTip = false
Vue.use(Toast)

Vue.directive('focus', {
    inserted(el) {
        el.focus()
    }
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
