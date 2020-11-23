import axios from 'axios'
import router from '../router/index'
import store from '../store/index'


export function request(config) {
    const instance = axios.create({
        baseURL: 'https://nicemusic-api.lxhcool.cn/',
        // baseURL: ' http://192.168.0.22:3000',
        withCredentials: true,
    })
    instance.interceptors.request.use(data => {
        if (window.localStorage.getItem('cookie')) {
                if (data.params ) {
                    data.params.cookie = window.localStorage.getItem('cookie')
                }
            }
            return data
        }, err => {
            console.log(err);
        }
    )

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)
}
