<template>
    <div class="security-code">
        <ul>
            <li @click="inputGetFocus" ref="codeList" class="code" v-for="item in 4">
                {{securityCode[item-1]}}
            </li>
        </ul>
        <input @change="captchaVerify" class="none-input" v-focus ref="inp" maxlength="4" type="text"
               v-model="securityCode">
    </div>
</template>

<script>
    import {captchaVerify} from "api";

    export default {
        name: "SecurityCode",
        data() {
            return {
                securityCode: ""
            }
        },
        props: {
            phone: String
        },
        watch: {
            securityCode(newVal) {
                this.$nextTick(() => {
                    if (
                        newVal.length !== 0
                        && this.$refs.codeList[newVal.length - 1].innerHTML.trim() !== ''
                    ) {
                        this.$refs.codeList[newVal.length - 1].classList.add('current')
                    }

                    if (
                        newVal.length !== 4 &&
                        this.$refs.codeList[newVal.length].innerHTML.trim() == ''
                    ) {
                        this.$refs.codeList[newVal.length].classList.remove('current')
                    }
                })

                if (newVal.length == 4) {
                    this.$refs.inp.blur()
                }
            }
        },
        methods: {
            // 点击li得到输入框焦点
            inputGetFocus() {
                this.$refs.inp.focus()
            },
            //验证码输入完成时进行验证
            captchaVerify() {
                if (this.securityCode.length == 4) {
                    captchaVerify(this.phone, this.securityCode).then(res => {
                        if (res.code == 200) {
                            window.sessionStorage.setItem('securityCode',this.securityCode)
                            window.sessionStorage.setItem('phone',this.phone)
                            this.$router.push({
                                name:'phoneRegister',
                                params:{
                                    phone:this.phone
                                }
                            })
                        }
                    }).catch(err => {
                        this.$toast('验证码错误')
                    })
                }
            }
        },

        computed: {}
    }
</script>

<style lang="less" scoped>
    .current {
        border-bottom-color: #FF3A3A !important;
    }

    .security-code {
        margin-top: 50px;
    }

    .none-input {
        position: fixed;
        top: -111100px;
    }

    ul {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }

    .code {
        transition: .5s;
        line-height: 35px;
        height: 35px;
        margin: 0 10px;
        border-bottom: 3px solid rgba(0, 0, 0, 1);
        width: 25%;
        border-radius: 6px;
        text-align: center;
    }
</style>
