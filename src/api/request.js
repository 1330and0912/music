import axios from 'axios'

import store from '../store/index'
var os=require('os');
var ifaces=os.networkInterfaces();

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://192.168.0.22:3000',
        // baseURL: ' http://192.168.43.121:3000',
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
