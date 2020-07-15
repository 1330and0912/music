<template>
    <button :disabled="isDisable" class="next-step" @click="nextStepClick">
        <slot>下一步</slot>
    </button>
</template>

<script>
    export default {
        name: "NextStep",
        props: {
            isDisable: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            nextStepClick() {
                this.$emit('next-step')
            }
        }
    }
</script>

<style lang="less" scoped>
    .next-step {
        width: 100%;
        height: 50px;
        border-radius: 20px;
        margin-top: 50px;
        outline: none;
        background-color: #FF3A3A;
        text-align: center;
        line-height: 50px;
        color: white;
        font-size: 18px;
        border: none;

        &:active {
            box-shadow: 0px -1px 1px rgba(255, 1, 1, 1);
        }
    }

    :disabled {
        background-color: rgba(255, 0, 0, .5);

    }
</style>
