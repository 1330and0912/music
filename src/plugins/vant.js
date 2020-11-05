import Vue from 'vue'
import 'vant/lib/index.css';
// 在这里引入你所需的组件
import {
    Popup,
    Tabs,
    Tab,
    Swipe,
    SwipeItem,
    Lazyload,
    Search,
    Icon,
    Dialog,
    Toast,
    PullRefresh,
    List,
    DropdownMenu,
    DropdownItem,
    Collapse,
    CollapseItem,
    Sticky,
    Sidebar,
    SidebarItem,
    Slider

} from 'vant'

// 按需引入UI组件
Vue.use(Popup)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload, {
    loading: require('assets/img/loading.jpg'),
})
Vue.use(Search)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Sticky)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Slider)
