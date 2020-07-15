<template>
    <div id="phoneRegister">
        <phone-nav-bar text="手机号验证"/>
        <div class="hint">
            <div class="phone-info">
                验证码已发送至 <br>
                <span class="phone">+86 &nbsp;{{formatPhone}}</span>
            </div>
            <div class="count-down" v-if="isCountDown">
                <span>{{count}}s</span>
            </div>
            <div class="re-send" v-else>
                <span @click="reSend">重新获取</span>
            </div>
        </div>
        <security-code :phone="phone"/>

    </div>
</template>

<script>

    import {sendVerificationCode} from "api/index";

    import SecurityCode from "./childcomponents/SecurityCode";
    import PhoneNavBar from "./childcomponents/PhoneNavBar";

    export default {
        name: "phoneVerify",
        components: {SecurityCode, PhoneNavBar},
        props: {
            phone: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                count: 60,//发送验证码发后倒计时,
                isCountDown: true//判断是否显示倒计时，
            }
        },
        computed: {
            formatPhone() {
                return this.phone.toString().slice(0, 3) + '****' + this.phone.toString().slice(7)
            }
        },
        mounted() {
            this.countDown()
        },
        methods: {
            //验证码倒计时方法
            countDown() {
                if (this.isCountDown) {
                    this.count--
                    window.setTimeout(() => {
                        if (this.count <= 0) {
                            this.count = 60
                            this.isCountDown = false
                            return
                        }
                        this.countDown()
                    }, 1000)
                }
            },

            //重新发送验证码
            reSend() {
                sendVerificationCode(this.phone).then(res => {
                        if (res.code == 200) {
                            this.isCountDown = true
                            this.$toast('发送成功,请注意接收')
                            this.countDown()
                        }
                    }
                )
            }
        },
    }
</script>

<style lang="less" scoped>
    #phoneRegister {
        .page-padding;
    }

    .hint {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
        font-size: 18px;
        line-height: 25px;

        .phone-info {

            .phone {
                font-size: 14px;
                color: #A9A9A9;
            }
        }

        .count-down {
            align-self: flex-end;
            font-size: 15px;
            color: #A9A9A9;
        }

        .re-send {
            align-self: flex-end;
            font-size: 15px;
            color: #0086b3;
        }

    }
</style>
