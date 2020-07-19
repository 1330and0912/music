import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://192.168.0.106:3000',
        withCredentials: true,
    })
    instance.interceptors.request.use(data => {
        // console.log(data.data);
        return data
    }, err => {
        console.log(err);
    })

    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        //alert(err);
        console.log(err);
    })

    return instance(config)
}
