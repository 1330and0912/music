import axios from 'axios'
import {LocalData} from "../storage/storage";


export function request(config) {
    const instance = axios.create({
        baseURL: 'https://nicemusic-api.lxhcool.cn/',
        // baseURL: ' http://192.168.0.22:3000',
        withCredentials: true,
    })
    instance.interceptors.request.use(data => {
            if (LocalData.getItem('cookie')) {
                if (data.params) {
                    data.params.cookie = LocalData.getItem('cookie')
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
