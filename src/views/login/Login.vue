<template>
    <div id="login">
        <phone-nav-bar text="手机号登录"/>
        <div class="hint">
            未注册手机号登录将自动创建账号
        </div>
        <form-input ref="inp" :maxlength="11" @bind-value="getPhone" caret="red"
                    placeholder="请输入手机号码"/>
        <next-step @next-step="nextStep"/>

    </div>
</template>

<script>

    import {checkPhone} from "common/phone-validation";

    import {isRegister, sendVerificationCode} from "api/index";

    import FormInput from "../../components/common/FormInput";
    import PhoneNavBar from "./childcomponents/PhoneNavBar";
    import NextStep from "./childcomponents/NextStep";
    import PasswordVerify from "./PasswordVerify";

    export default {
        name: "Login",
        components: {PasswordVerify, PhoneNavBar, FormInput, NextStep},
        data() {
            return {
                isRegister: false,
                phone: '',
                phoneValid: {},
                active: 3
            }
        },
        methods: {

            //监听自定义事件  --------------------------------------------------
            getPhone(phone) {
                //判断当前手机是否符合格式
                if (checkPhone(phone)) {
                    this.phone = phone
                    //发送请求判断当前手机号是否注册
                    isRegister(phone).then(res => {
                        this.isRegister = res.exist == -1 ? false : true
                    })
                } else {
                    this.$toast('请输入格式正确的手机号')
                }
            },

            //本组件事件 --------------------------------------------------

            //点击下一步时判断手机号是否已经注册
            //没有注册则发送验证码
            nextStep() {
                if ((!this.isRegister) && this.phone) {
                    sendVerificationCode(this.phone).then(res => {
                        if (res.code == 200) {
                            //如果当前手机号未注册则跳转至注册页面
                            this.$router.push({
                                name: 'phoneVerify',
                                params: {
                                    phone: this.phone
                                }
                            })
                        }
                    })
                } else if (checkPhone(this.phone)) {
                    this.$store.dispatch('login/savePhone', this.phone)
                    //如果账号已经注册则跳转至输入密码解密
                    this.$router.push({
                        name: 'passwordVerify',
                    })
                }
            },

        }
    }
</script>

<style lang="less" scoped>

    #login {
        .page-padding;
    }


    .hint {
        margin: 60px 0 50px;
        color: #A3A3A3;
        font-size: 16px;
    }


</style>
