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
        baseURL: 'https://nicemusic-api.lxhcool.cn/',
        // baseURL: ' http://192.168.0.22:3000',
        withCredentials: true,
    })
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

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)
}
