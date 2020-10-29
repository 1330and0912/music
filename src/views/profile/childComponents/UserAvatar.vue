<template>
    <div class="user-avatar">
        <template v-if="profile">
            <div class="avatar-wrap">
                <div class="avatar">
                    <img :src="profile.avatarUrl" alt="">
                </div>
                <div class="user-name">
                    {{profile.nickname}}
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
    import {mapState}from 'vuex'
    export default {
        name: "UserAvatar",
        data() {
            return {
            }
        },
        computed: {
            ...mapState('login',['profile']),

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
