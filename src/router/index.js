import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
        component: () => import('views/profile/Profile')
    },
    {
        path: '/play',
        name: 'play',
        component: () => import('components/common/play/Play')
    } ,   {
        path: '/recent',
        name: 'recent',
        component: () => import('views/recentplay/RecentPlay')
    }
]

const router = new VueRouter({
    routes
})

export default router
