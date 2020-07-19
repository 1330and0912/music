<template>
    <div class="form-input-wrap">
        <input
                ref="inp"
                :maxlength="maxlength"
                v-model="value"
                @change="valueChange"
                :type="inputType"
                :placeholder="placeholder"
                :style="{caretColor:caret}"
                @input="isBlur($event.target)"
        >
    </div>
</template>

<script>

    export default {
        name: "FormInput",
        props: {
            maxlength: {//输入框最大输入字数
                type: Number,
                default: 99
            },
            caret: String,//焦点颜色值,
            placeholder: String,//提示文字,
            inputType: {
                type: String,
                default: 'text'
            }

        },
        data() {
            return {
                value: ''
            }
        },
        methods: {
            //当输入框内容发生改变时触发的事件
            valueChange() {
                this.$emit('bind-value', this.value)
            },
            //当输入长度上线时离开输入框
            isBlur(inp) {
                if (inp.value.length == this.maxlength) {
                    inp.blur()
                }
                this.$emit('input-value', inp.value)

            }
        },
        mounted() {
            this.$refs.inp.focus() //1
        }

    }
</script>

<style scoped>
    input {
        width: 100%;
        padding: 6px 6px;
        border: none;
        line-height: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, .3);
        outline: none;

    }

    ::placeholder {
        color: #cccccc;
        font-size: 14px;
    }

    .form-input-wrap {
        width: 100%;
    }

</style>
