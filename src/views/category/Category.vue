<template>
    <transition name="fade">
        <div id="category" :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
            <drop-down-menu/>
        </div>
    </transition>
</template>

<script>
    import DropDownMenu from './childComponents/DropDownMenu'
    import CategoryList from "./childComponents/CategoryList";

    export default {
        name: "Category",
        components: {CategoryList, DropDownMenu},
        data() {
            return {
                transitionName: 'slide-left'
            }
        },
        watch: {
            $route(to, from) {
                if (to.meta.index > from.meta.index) {
                    this.transitionName = 'slide-right'
                } else {
                    this.transitionName = 'slide-left'
                }

            }
        },
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

    #category {
        height: 100%;
        background-color: white;
        padding: 49px 0 0;
    }

    .bottom-padding {
        padding-bottom: 49px !important;
    }
</style>
