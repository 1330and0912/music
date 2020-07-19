<template>
    <div id="profile">
        <user-avatar class="user"/>
        <my-list/>
        <my-music/>
        <!--        <recent-play></recent-play>-->

    </div>
</template>

<script>

    import UserAvatar from "./childComponents/UserAvatar";
    import MyList from "./childComponents/MyList";
    import MyMusic from "./childComponents/MyMusic";
    import RecentPlay from "./childComponents/RecentPlay";


    export default {
        name: "Profile",
        components: {RecentPlay, MyMusic, MyList, UserAvatar},
        props: {
            background: {
                type: String,
                default: 'url(~../../assets/img/profile/defaultbackgroundimg.jpg)'
            }
        },
        computed: {},
        mounted() {

        }
    }
</script>

<style lang="less" scoped>
    #profile {

        height: 100vh;
        background-size: 100% 280px;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-image: url("../../assets/img/profile/defaultbackgroundimg.jpg");

    }

    .user {
        padding-top: 64px;
    }
</style>
