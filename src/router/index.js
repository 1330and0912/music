import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const musicVideoRedirect = [
    {
        path: '/search/music-video/:id',
        redirect: '/music-video/:id'
    },
    {
        path: '/singer-detail/music-video/:id',
        redirect: '/music-video/:id'
    }
]//mv页面相关路由重定向
const playRedirect = [
    {
        path: '/search/play',
        redirect: '/play'
    },
    {
        path: '/singer-detail/play',
        redirect: '/play'
    },
]//主播放器页面路由相关重定向
const routes = [
    ...musicVideoRedirect,
    ...playRedirect,
    {
        path: '/music-video/singer-detail/:id',
        redirect: '/singer-detail/:id'
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
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('views/category/Category'),
    },

    {
        path: '/play',
        name: 'play',
        component: () => import('components/common/play/Play'),
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
    },
    {
        path: '/singer-detail/:id',
        name: 'singerDetail',
        props: true,
        component: () => import ('views/singerDetail/SingerDetail')
    },
    {
        path: '/music-video/:id',
        name: 'musicVideo',
        props: true,
        component: () => import('components/common/musicVideo/MusicVideo')
    },
    {
        path: '/favorite-music',
        name: 'favoriteMusic',
        component: () => import('views/favoriteMusic/FavoriteMusic.vue')
    },
    {
        path:'/my-collect',
        name:'myCollect',
        component: () =>import('views/myCollect/MyCollect')
    },
    {
        path:'/recommend',
        name:'recommend',
        component: () =>import('views/recommend/Recommend')

    }
]

const router = new VueRouter({

    routes,
})

export default router
