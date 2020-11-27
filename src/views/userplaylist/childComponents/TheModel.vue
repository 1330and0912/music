<template>
    <div   class="the-model" @click="close" v-show="value">
        <div class="content">
            <div class="title">新建歌单</div>
            <input type="text" placeholder="请输入歌单标题">
            <div class="control">
                <div class="cancel" @click.stop="cancel">取消</div>
                <div class="ok" @click.stop="submit">提交</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "TheModel",
        data() {
            return {
                value: false
            }
        },
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            show(newVal) {
                this.value = newVal
            },
            value(newVal) {
                this.$emit('changeShow', newVal)
            }
        },
        methods: {
            close(e) {
                (e.target.className == 'the-model') && (this.value = false)
            },
            cancel() {
                this.value = false
                this.$emit('cancel')
            },
            submit() {
                this.$emit('submit')
            }
        }
    }
</script>

<style lang="less" scoped>

    .the-model {
        width: 100%;
        height: 100%;
        position: absolute;

        &::before {
            position: absolute;
            width: 100%;
            height: 100%;
            content: '';
            background-color: rgba(0, 0, 0, 1);
            opacity: .5;
            z-index: 1;
        }

        .content {
            z-index: 11;
            box-shadow: 0 0 10px rgba(1, 0, 220, .1);
            border-radius: 10px;
            padding: 15px;
            width: 85%;
            height: 160px;
            background-color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            .title {
                font-weight: bold;
                height: 30px;
            }

            input {
                width: 100%;
                border-color: transparent transparent;
                border-bottom: 1px solid rgba(0, 0, 0, .1);
                padding: 6px 2px;

                &::placeholder {
                    font-size: 12px;
                    color: rgba(0, 0, 0, .4);
                }
            }

            .control {
                display: flex;
                justify-content: flex-end;
                margin-top: 50px;

                .cancel, .ok {
                    margin-right: 40px;
                    color: #FF3A3A;
                    font-weight: bold;
                    font-size: 14px;
                }

                .ok {
                    margin-right: 10px;
                }
            }
        }


    }
</style>
