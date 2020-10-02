<template>
    <div class="nav-header">
        <div class="back-wrap">
            <i @click="back" class="iconfont icon-zuojiantou"></i>
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavHeader",
        props: ['title'],
        methods: {
            back() {
                this.$router.back()
            }
        },
        created() {

        }
    }
</script>

<style lang="less" scoped>
    .nav-header {
        margin-top: 10px;
        padding: 0 0 0 10px;
        height: 44px;
        line-height: 44px;

        .back-wrap {
            display: flex;
            align-items: center;

            .icon-zuojiantou {
                font-size: 36px;
                margin-right: 5px;
            }
        }

    }
</style>
