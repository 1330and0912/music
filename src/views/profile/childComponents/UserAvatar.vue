<template>
    <div class="user-avatar">
        <template v-if="isLogin">
            <div class="avatar-wrap">
                <div class="avatar">
                    <img :src="userInfo.avatarUrl" alt="">
                </div>
                <div class="user-name">
                    {{userInfo.nickname}}
                </div>
            </div>
        </template>
        <template v-else>
            <div class="avatar-wrap">
                <div class="avatar">
                    <img src="~assets/img/profile/avatar.jpg" alt="">
                </div>
                <div class="user-name">
                    登录即可同步个人信息
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import {loginStatus} from "../../../api";

    export default {
        name: "UserAvatar",
        data() {
            return {
                isLogin: false,
                userInfo: {}
            }
        },
        created() {
            //先判断登录状态 如果登录则获取用户信息并渲染对应用户信息
            loginStatus().then(res => {
                if(res.code == 200) {
                   window.sessionStorage.setItem('profile', JSON.stringify(res.profile))
                   this.userInfo = JSON.parse(window.sessionStorage.getItem('profile'))
                   this.isLogin = true
               }
            })
        }
    }
</script>

<style lang="less" scoped>
    .user-avatar {
    }

    .avatar-wrap {
        padding: 20px;
        display: flex;
        align-items: center;

        .avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            margin-right: 20px;

            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
        }

        .user-name {
            color: white;
            font-size: 20px;
        }
    }
</style>
