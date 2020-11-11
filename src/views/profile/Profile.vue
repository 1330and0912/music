<template>
    <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" id="profile">
        <user-avatar class="user"/>
        <my-list/>
        <my-music/>
    </div>
</template>

<script>

    import UserAvatar from "./childComponents/UserAvatar";
    import MyList from "./childComponents/MyList";
    import MyMusic from "./childComponents/MyMusic";
    import Swipe from "./childComponents/Swipe";
    import MainSet from "../../components/common/set/MainSet";


    export default {
        name: "Profile",
        components: {MainSet, Swipe, MyMusic, MyList, UserAvatar},
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
        padding: 0 10px;
        height: 100vh;
        /*background-size: 100% 280px;*/
        /*background-repeat: no-repeat;*/
        /*background-attachment: fixed;*/
        //background-image: url("../../assets/img/profile/defaultbackgroundimg.jpg");
        background-color: #F8F8F8;
        overflow-y: scroll;
    }

    .user {
        padding-top: 49px;
    }
    .bottom-padding {
        padding-bottom: 49px!important;
    }
</style>
