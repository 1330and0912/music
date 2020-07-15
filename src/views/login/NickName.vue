<template>
    <div id="nickName">
        <phone-nav-bar text="给自己取一个昵称"/>
        <div class="img-wrap"><img src="~assets/img/login/hi.jpg">你希望大家怎么称呼你呢？</div>
        <form-input @input.native="inputNickname" placeholder="请输入昵称" caret="red"/>
        <next-step @next-step="openMusic" :is-disable="isDisable">
            开启云音乐
        </next-step>
    </div>
</template>

<script>
    import NextStep from "./childcomponents/NextStep";
    import PhoneNavBar from "./childcomponents/PhoneNavBar";
    import FormInput from "components/common/FormInput";
    import {checkName} from "common/name-validation";
    import {registerCellPhone, initProfile} from "api";

    export default {
        name: "NickName",
        components: {FormInput, PhoneNavBar, NextStep},
        data() {
            return {
                isDisable: true,
                nickname: '',
                registerData: {}
            }
        },
        methods: {
            openMusic() {
                window.sessionStorage.setItem('nickname', this.nickname)
                this.registerData.phone = window.sessionStorage.getItem('phone')
                this.registerData.pwd = window.sessionStorage.getItem('pwd')
                this.registerData.nickname = window.sessionStorage.getItem('nickname')
                this.registerData.securityCode = window.sessionStorage.getItem('securityCode')
                registerCellPhone(this.registerData).then(res => {
                    if (res.code == 200) {
                        //初始化昵称
                        this.$toast('成功注册')
                        initProfile(this.registerData.nickname).then(res => {
                            console.log(res);
                        })
                    }

                }).catch(err => {
                    console.log(err);
                })

            },
            inputNickname(e) {
                this.nickname = e.target.value
                this.isDisable = !checkName(e.target.value)
            }
        }
    }
</script>

<style lang="less" scoped>
    #nickName {
        .page-padding;
    }

    .img-wrap {
        margin: 30px auto 10px;
        width: 50%;
        height: 200px;

        img {
            width: 100%;
        }
    }
</style>
