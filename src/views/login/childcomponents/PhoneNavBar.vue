<template>
    <div class="phone-nav-bar">
        <nav class="nav">
            <div class="left ">
                <i @click="back" class="iconfont icon-zuojiantou"></i>
                <span>{{text}}</span>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "PhoneNavBar",
        props: {
            text: String//导航文本
        },
        methods: {
            back() {
                this.$router.back()
            }

        }
    }
</script>

<style lang="less" scoped>
    .nav {
        .left {
            font-size: 20px;
            display: flex;
            align-items: center;

            i {
                font-size: 28px;
                padding-right: 10px;
            }

        }
    }
</style>
