<template>
    <div id="passwordVerify">
        <phone-nav-bar text="手机号登录"/>
        <form-input
                @input-value="savePassword"
                class="pwd"
                input-type="password"
                caret="red"
                placeholder="请输入密码"
        />
        <next-step @next-step="login">
            登录
        </next-step>
    </div>
</template>

<script>
    import PhoneNavBar from "./childcomponents/PhoneNavBar";
    import FormInput from "components/common/FormInput";
    import NextStep from "./childcomponents/NextStep";

    import {loginCellphone} from "api";
    import {loginStatus} from "api";

    export default {
        name: "PasswordVerify",
        components: {NextStep, FormInput, PhoneNavBar},
        methods: {
            //登录功能
            login() {
                const {phone, password} = this.$store.getters['login/getUserInfo']
                loginCellphone(phone, password).then(res => {
                    console.log(res)
                    if (res.code == 502) {
                        this.$toast(res.message)
                        return
                    }
                    loginStatus().then(res => {
                        if (res.code == 200) {
                            //保存用户头像 id 名称信息
                            window.sessionStorage.setItem('profile', JSON.stringify(res.profile))
                        }
                    })
                    document.cookie = res.cookie//登录时设置cookie
                    this.$router.push('profile')

                })
            },
            //将密码保存到vuex
            savePassword(password) {
                this.$store.dispatch('login/savePassword', password)
            }
        }
    }
</script>

<style lang="less" scoped>
    #passwordVerify {
        .page-padding;
    }

    .pwd {
        margin-top: 20px;
    }
</style>
