import axios from 'axios'
import {LocalData} from "../storage/storage";
import {
    LikeMusic,
    UserSub,
    UserPlayList,
    UserDetail,
    LikeList,
    RefLogin,
    MVList,
    CollectSinger,
    SingerList,
    LoginStatus
} from '../api/resource'

//需要添加cookie的接口
let url = [LikeMusic, UserSub, UserPlayList, UserDetail, LikeList, RefLogin, MVList, CollectSinger, SingerList, LoginStatus]

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://nicemusic-api.lxhcool.cn/',//接口默认基本地址
        // baseURL: ' http://106.54.188.69:3000/',
        withCredentials: true,
        timeout:8000//超时时间
    })
    //请求拦截器，对需要携带cookie的api添加cookie参数
    instance.interceptors.request.use(data => {
            let isNeverLogin = url.findIndex(item => item == data.url)
            if (LocalData.getItem('cookie') && isNeverLogin !== -1) {
                if (data.params) {
                    data.params.cookie = LocalData.getItem('cookie')
                }
            }
            return data
        }, err => {
            console.log(err);
        }
    )
    //响应拦截器，返回项目中只需要使用的data字段
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)
}
