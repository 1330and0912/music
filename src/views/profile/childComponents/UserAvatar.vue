<template>
    <div class="user-avatar">
        <template v-if="profile">
            <div class="avatar-wrap" @click="userDetail(profile.userId)">
                <div class="avatar">
                    <img v-lazy="profile.avatarUrl+'?param=100y100'" alt="">
                </div>
                <div class="user-name">
                    {{profile.nickname}}
                </div>
            </div>
        </template>
        <template v-else>
            <div class="avatar-wrap">
                <div class="avatar">
                    <van-icon name="contact"/>
                </div>
                <div @click="login" class="user-name">
                    立即登录
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import {loginStatus} from "../../../api";
    import {mapState} from 'vuex'

    export default {
        name: "UserAvatar",
        data() {
            return {}
        },
        computed: {
            ...mapState('login', ['profile']),

        },
        methods: {
            login() {
                this.$router.push('/login')
            },
            userDetail(id) {
                console.log(id);
                this.$router.push({
                    name: 'userDetail',
                    params: {id}
                })
            }
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
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            color: rgba(222, 0, 0, .5);
            background-color: rgba(222, 0, 0, .1);
            border-radius: 50%;
            margin-right: 20px;
            font-size: 30px;

            img {
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
        }

        .user-name {
            color: black;
            font-size: 18px;
            font-weight: 600;
        }
    }
</style>
