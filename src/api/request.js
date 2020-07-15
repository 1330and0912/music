import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://192.168.0.106:3000'
    })

    instance.interceptors.request.use(data => {
        return data
    }, err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        //alert(err);
        console.log(err);
    })

    return instance(config)
}
