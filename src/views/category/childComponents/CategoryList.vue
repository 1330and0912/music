<template>
    <div class="category-list">
        <header>
            热门歌手
        </header>
        <div @click="goDetail(item.id)" :key="item.id" v-for="(item) in categoryList" class="category-list-item">
            <div class="name">
                <img v-lazy="item.picUrl" alt="">
                {{item.name}}
            </div>
            <div class="followed" :class="item.followed?'followed-false':'followed-true'">
                <div v-if="item.followed">
                    <van-icon name="success"/>
                    已关注
                </div>
                <div v-else>
                    <van-icon name="plus"/>
                    关注
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CategoryList",
        props: {
            categoryList: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            //前往歌手详情信息
            goDetail(id) {
                this.$router.push(`singer-detail/${id}`)
            },

        }
    }
</script>

<style lang="less" scoped>
    .category-list {
        margin-top: 49px;

        header {
            color: black;
            font-size: 14px;
            padding: 8px 17px;
            background-color: rgba(110, 101, 101, .1);
        }
    }

    .category-list-item {
        padding: 15px 12px;
        height: 68px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: background-color .2s;

        &:active {
            background-color: rgba(0, 0, 0, .1);
        }

        .name {
            font-size: 16px;
            display: flex;
            align-items: center;
            color: black;

            img {
                margin-right: 10px;
                border-radius: 50%;
                width: 45px;
                height: 45px;
            }
        }

        .followed {
            width: 80px;
            height: 28px;
            border-radius: 14px;
            padding: 0 3px;

            div {
                font-size: 14px;
            }
        }

        .followed-true {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FF3A3A;
            border: 1px solid red;

            &:active {
                background-color: red;
                color: white;
            }
        }

        .followed-false {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #999999;
            color: #999999;
        }

    }
</style>
