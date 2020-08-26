import {request} from './request'
import {
    IsRegister,
    SendVerificationCode,
    CaptchaVerify,
    RegisterCellPhone,
    InitProfile,
    LoginCellphone,
    LoginStatus,
    GetLyric,
    GetSongURL, Search, RecentPlay, Banner, SearchHotDetail, DefaultSearchWord
} from "./resource";

//@phone 手机号码 判断手机号码是否已注册
export function isRegister(phone) {
    return request({
        url: IsRegister,
        params: {
            phone,
            timestamp: new Date()
        }

    })
}

//@phone 手机号码 发送验证码
export function sendVerificationCode(phone) {
    return request({
        method: 'post',
        url: SendVerificationCode,
        data: {
            phone,
            //timestamp:new Date()
        }
    })
}

// @phone 手机号码
// @captcha 用户输入的验证码 检查验证码是否正确
export function captchaVerify(phone, captcha) {
    return request({
        url: CaptchaVerify,
        params: {
            phone,
            captcha
        }
    })
}

//账号注册
// @phone 手机号
// @captcha 验证码
// @password 密码
// @nickname 昵称
export function registerCellPhone(registerData) {
    console.log(registerData);
    return request({
        method: 'post',
        url: RegisterCellPhone,
        data: {
            phone: registerData.phone,
            captcha: registerData.securityCode,
            password: registerData.pwd,
            nickname: registerData.nickname
        }
    })
}

//@nickname昵称
//传入昵称初始化昵称
export function initProfile(nickname) {
    return request({
        url: InitProfile,
        params: {
            nickname
        }
    })
}

//@phone:电话号码
//@password:密码
//验证号码与密码进行登录
export function loginCellphone(phone, password) {
    return request({
        method: 'post',
        url: LoginCellphone,
        data: {
            phone,
            password,
            timestamp: new Date()
        }
    })
}

//获取用户登录状态
export function loginStatus() {
    return request({
        url: LoginStatus,
        params:{
            timestamp: new Date()
        }
    })
}

//获取歌词
// @lyricID:音乐id
export function getLyric(lyricID) {
    return request({
        url: GetLyric,
        params: {
            id: lyricID
        }
    })
}

//获取音乐url
//@songID:音乐id
export function getSongURL(songID) {
    return request({
        url: GetSongURL,
        params: {
            id: songID
        }
    })
}

//获取用户最近播放
// 必选参数 : uid : 用户 id
// 可选参数 : type : type=1 时只返回 weekData, type=0 时返回 allData
export function getRecentPlay(uid, type = 0) {
    return request({
        url: RecentPlay,
        params: {
            uid,
            type,
        }
    })
}

//获取轮播图
// type:资源类型,对应以下类型,默认为 0 即PC
// 0: pc
// 1: android
// 2: iphone
// 3: ipad
export function getBanner(type = 2) {
    return request({
        url: Banner,
        params: {
            type
        }
    })
}

//搜索
// 必选参数 : keywords : 关键词
// 可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
// type: 搜索类型；
// 默认为 1 即单曲 ,
// 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户,
// 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
export function search(keywords, limit = 30, type = 1018) {
    return request({
        url: Search,
        params: {
            keywords, limit, type
        }
    })
}

//获取热搜榜记录
export function getSearchHotDetail() {
    return request({
        url: SearchHotDetail
    })
}

//获取默认搜索单词
export function getDefaultSearchWord() {
    return request({
        url: DefaultSearchWord
    })
}
