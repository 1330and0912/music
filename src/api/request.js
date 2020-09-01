import axios from 'axios'

import store from '../store/index'

export function request(config) {
    const instance = axios.create({
        baseURL: ' http://192.168.0.100:3000',
        withCredentials: true,
    })
    instance.interceptors.request.use(data => {
        return data
    }, err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)
}
