import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/search/play',
        redirect: '/play'
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('views/login/Login')
    },
    {
        path: '/phoneVerify/:phone',
        name: 'phoneVerify',
        props: true,
        component: () => import('views/login/PhoneVerify')
    },
    {
        path: '/phoneRegister',
        name: 'phoneRegister',
        component: () => import('views/login/PhoneRegister')
    },
    {
        path: '/nickName',
        name: 'nickName',
        component: () => import('views/login/NickName')
    },
    {
        path: '/passwordVerify',
        name: 'passwordVerify',
        component: () => import('views/login/PasswordVerify')
    }
    ,
    {
        path: '/profile',
        name: 'profile',
        component: () => import('views/profile/Profile'),
        meta: {index: 0},   //页面下标
    },
    {
        path: '/play',
        name: 'play',
        component: () => import('components/common/play/Play'),
        meta: {index: 1},   //页面下标
    },
    {
        path: '/recent',
        name: 'recent',
        component: () => import('views/recentplay/RecentPlay')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('views/search/Search'),
        children: [
            {
                path: '/search',
                redirect: 'search-referral'
            },
            {
                path: 'search-result',
                name: 'searchResult',
                component: () => import('views/search/SearchResult'),
            },
            {
                path: 'search-referral',
                name: 'searchReferral',
                component: () => import('views/search/SearchReferral'),
            },

        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
