<template>
    <i :class="isCollect?'is-collect':''" @click="collectClick" class="iconfont icon-aixin"></i>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "Collect",
        props: ['id'],
        computed: {
            ...mapState('collect', ['ids']),
            isCollect() {
                //console.log(this.ids);
                return this.ids.some(item => item == this.id)
            }
        },

        methods: {
            collectClick() {
                this.$emit('collect')
            }
        },
    }
</script>

<style lang="less" scoped>
    .icon-aixin  {
        font-size: 20px;
        color: whitesmoke;
        transition: .3s;

        &:active {
            color: red;
            transform: scale(1.8);
        }
    }
    .is-collect {
        color: red !important;
    }
</style>
