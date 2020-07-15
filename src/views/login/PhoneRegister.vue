<template>
    <div id="phoneRegister">
        <phone-nav-bar text="手机号注册"/>
        <p class="hint">请设置登录密码，8-20位登录字符，至少包含字母/数字/符号两种组合</p>
        <form-input @input.native="inputPwd" :maxlength="20" input-type="password" caret="red"/>
        <next-step @next-step="register" :is-disable="isDisable"/>
    </div>
</template>

<script>
    import NextStep from "./childcomponents/NextStep";
    import PhoneNavBar from "./childcomponents/PhoneNavBar";
    import FormInput from "components/common/FormInput";

    import {checkPassword} from "common/pwd-validation";

    export default {
        name: "PhoneRegister",
        components: {FormInput, PhoneNavBar, NextStep},
        data() {
            return {
                isDisable: true,
                pwd: ''
            }
        },
        methods: {
            //检测密码是否匹配规则
            inputPwd(e) {
                this.pwd = e.target.value
                this.isDisable = !checkPassword(e.target.value)
            },
            //注册账号
            register() {
                window.sessionStorage.setItem('pwd', this.pwd)//将密码保存到session
                this.$router.push({
                    name: 'nickName'
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    #phoneRegister {
        .page-padding;
    }

    .hint {
        .hint-font;
        margin: 30px 0;
    }
</style>
