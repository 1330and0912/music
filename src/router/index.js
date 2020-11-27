import Vue from 'vue'
import VueRouter from 'vue-router'
import {nextTick} from "q";
import store from "../store";

Vue.use(VueRouter)
//普通路由重定向
const rect = [
    {
        path: '/music-video/singer-detail/:id',
        redirect: '/singer-detail/:id',

    },
    {
        path: '/',
        redirect: '/profile'
    },
]
//mv页面相关路由重定向
const musicVideoRedirect = [
    {
        path: '/search/music-video/:id',
        redirect: '/music-video/:id'
    },
    {
        path: '/singer-detail/music-video/:id',
        redirect: '/music-video/:id'
    }, {
        path: '/song-list/music-video/:id',
        redirect: '/music-video/:id'
    }
]

//主播放器页面路由相关重定向
const playRedirect = [
    {
        path: '/search/play',
        redirect: '/play'
    },
    {
        path: '/singer-detail/play',
        redirect: '/play'
    },
    {
        path: '/song-list/play',
        redirect: '/play'
    }
]

//路由页面组件
const routerView = [
    ,
    {
        path: '/profile',
        name: 'profile',
        component: () => import('views/profile/Profile'),
        meta: {
            isShowNavBar: true,
            isShowPlayBar: true,
            index: 1
        }
    },
    {
        path: '/discover',
        name: 'discover',
        component: () => import('views/discover/Discover'),
        meta: {
            isShowNavBar: true,
            isShowPlayBar: true,
            index: 2
        }
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('views/category/Category'),
        meta: {
            isShowNavBar: true,
            isShowPlayBar: true,
            index: 3
        }
    },
    {
        path: '/recommend',
        name: 'recommend',
        component: () => import('views/recommend/Recommend'),
        meta: {
            isShowNavBar: true,
            isShowPlayBar: true,
            index: 4
        }
    },
]

//需要登录的组件
const neverLogin = [
    {
        path: '/favorite-music',
        name: 'favoriteMusic',
        component: () => import('views/favoriteMusic/FavoriteMusic.vue'),
        meta: {isLogin: true, isShowPlayBar: true}
    },
    {
        path: '/my-collect',
        name: 'myCollect',
        component: () => import('views/myCollect/MyCollect'),
        meta: {isLogin: true, isShowPlayBar: true}
    },

]
//登录注册相关组件路由
const loginReg = [
    {
        path: '/login',
        name: 'login',
        component: () => import('views/login/Login'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: false,
            isPauseMusic: true
        }
    },
    {
        path: '/phoneVerify/:phone',
        name: 'phoneVerify',
        props: true,
        component: () => import('views/login/PhoneVerify'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: false,
            isPauseMusic: true
        }
    },
    {
        path: '/phoneRegister',
        name: 'phoneRegister',
        component: () => import('views/login/PhoneRegister'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: false,
            isPauseMusic: true
        }
    },
    {
        path: '/nickName',
        name: 'nickName',
        component: () => import('views/login/NickName'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: false,
            isPauseMusic: true
        }
    },
    {
        path: '/passwordVerify',
        name: 'passwordVerify',
        component: () => import('views/login/PasswordVerify'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: false,
            isPauseMusic: true
        }
    },
]

//搜索页面路由
const search = [
    {
        path: '/search',
        name: 'search',
        component: () => import('views/search/Search'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: true
        },
        children: [
            {
                path: '/search',
                redirect: 'search-referral'
            },
            {
                path: 'search-result',
                name: 'searchResult',
                component: () => import('views/search/SearchResult'),
                meta: {
                    isShowNavBar: false,
                    isShowPlayBar: true
                },
            },
            {
                path: 'search-referral',
                name: 'searchReferral',
                component: () => import('views/search/SearchReferral'),
                meta: {
                    isShowNavBar: false,
                    isShowPlayBar: true
                },
            },

        ]
    },
]

const routes = [
    ...musicVideoRedirect,
    ...playRedirect,
    ...routerView,
    ...rect,
    ...loginReg,
    ...neverLogin,
    ...search,
    {
        path: '/playlist-high-quality',
        name: 'playlistHighQuality',
        component: () => import('views/PlaylistHighQuality'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: true
        }
    },

    {
        path: '/play',
        name: 'play',
        component: () => import('components/common/play/Play'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: false
        }
    },

    {
        path: '/recent',
        name: 'recent',
        component: () => import('views/recentplay/RecentPlay'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: true
        }
    },

    {
        path: '/singer-detail/:id',
        name: 'singerDetail',
        props: true,
        component: () => import ('views/singerDetail/SingerDetail'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: true
        }
    },

    {
        path: '/music-video/:id',
        name: 'musicVideo',
        props: true,
        component: () => import('components/common/musicVideo/MusicVideo'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: false,
            isPauseMusic: true
        }
    },

    {
        path: '/song-list/:id',
        name: 'songList',
        props: true,
        component: () => import('components/common/songlist/SongList'),
        meta: {
            isShowNavBar: false,
            isShowPlayBar: true,
        }
    },
    {
        path: '/user-play-list',
        name: 'userPlayList',
        component: () => import('views/userplaylist/UserPlayList'),
        meta: {isLogin: false, isShowPlayBar: true},
    },
]

const router = new VueRouter({
    routes,
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

export default router
