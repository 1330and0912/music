import {request} from './request'
import {
    IsRegister,
    SendVerificationCode,
    CaptchaVerify,
    RegisterCellPhone,
    InitProfile,
    LoginCellphone
} from "./resource";

//@phone 传入手机号码 判断手机号码是否已注册
export function isRegister(phone) {
    return request({
        url: IsRegister,
        params: {
            phone
        }

    })
}

//@phone 传入手机号码 发送验证码
export function sendVerificationCode(phone) {
    return request({
        method: 'post',
        url: SendVerificationCode,
        data: {
            phone,
            // timestamp:new Date()
        }
    })
}

// @phone 传入手机号码
// @captcha 传入用户输入的验证码 检查验证码是否正确
export function captchaVerify(phone, captcha) {
    return request({
        url: CaptchaVerify,
        params: {
            phone,
            captcha
        }
    })
}

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

//传入昵称初始化昵称
export function initProfile(nickname) {
    return request({
        url: InitProfile,
        params: {
            nickname
        }
    })
}

export function loginCellphone(phone, password) {
    return request({
        method: 'post',
        url: LoginCellphone,
        data: {
            phone,
            password
        }
    })
}
