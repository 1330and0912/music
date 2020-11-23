<template>
    <transition name="fade">
        <div :class="this.$store.state.isShowPlayBar?'bottom-padding':''" id="profile">
            <div class="scroll-wrap">
                <user-avatar class="user"/>
                <my-list/>
                <my-music/>
                <song-list-ranking/>
            </div>
        </div>
    </transition>

</template>

<script>

    import UserAvatar from "./childComponents/UserAvatar";
    import MyList from "./childComponents/MyList";
    import MyMusic from "./childComponents/MyMusic";
    import Swipe from "./childComponents/Swipe";
    import MainSet from "../../components/common/set/MainSet";
    import SongListRanking from "./childComponents/SongListRanking";

    export default {
        name: "Profile",
        components: {SongListRanking, MainSet, Swipe, MyMusic, MyList, UserAvatar},
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
    .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-leave-to {
        position: fixed;
        opacity: 0;
        z-index: 99;
        width: 100%;
    }

    #profile {
        width: 100%;
        padding: 49px 10px 0;
        height: 100%;
        /*background-size: 100% 280px;*/
        /*background-repeat: no-repeat;*/
        /*background-attachment: fixed;*/
        //background-image: url("../../assets/img/profile/defaultbackgroundimg.jpg");
        background-color: #F8F8F8;
    }

    .scroll-wrap {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }
</style>
