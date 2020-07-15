<template>
    <div id="passwordVerify">
        <phone-nav-bar text="手机号登录"/>
        <form-input class="pwd" input-type="password" caret="red" placeholder="请输入密码"/>
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

    export default {
        name: "PasswordVerify",
        components: {NextStep, FormInput, PhoneNavBar},
        methods: {
            login() {
                loginCellphone()
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
