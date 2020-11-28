<template>
    <div class="action-wrap">
        <van-action-sheet class="action " v-model="value">
            <slot name="content">
                <div class="title" v-if="options">
                    名称:{{options.title}}
                </div>
                <template  v-if="options">
                    <div @click="select(index)" v-for="(item,index) in options.btn" class="btn-item">
                        <van-icon :name="item.icon"/>
                        <div class="text">{{item.text}}</div>
                    </div>
                </template>
            </slot>
        </van-action-sheet>
    </div>
</template>

<script>
    export default {
        name: "ActionSheet",
        props: ['showAction', 'options' ],
        data() {
            return {
                value: false
            }
        },
        watch: {
            value(newValue) {
                this.$emit('isShow', newValue)
            },
            showAction(newVal) {
                this.value = newVal
            },
        },

        methods: {
            select(index) {
                this.value = false
                this.$emit('select', index)
            }
        }
    }
</script>

<style lang="less" scoped>
    .action {
        width: 100%;
        padding: 5px 20px;
    }

    .title {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 44px;
        line-height: 44px;
        margin-bottom: 10px;
    }

    .btn-item {
        height: 40px;
        width: 100%;
        display: flex;
        color: darkseagreen;

        .text {
            font-size: 14px;
            margin-left: 10px;
            color: black;
            letter-spacing: 2px;
        }
    }


</style>
