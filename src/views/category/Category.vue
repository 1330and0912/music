<template>
    <div id="category"  :class="this.$store.state.isShowPlayBar?'bottom-padding':''">
       <drop-down-menu/>
    </div>
</template>

<script>
    import DropDownMenu from  './childComponents/DropDownMenu'
    import CategoryList from "./childComponents/CategoryList";
    export default {
        name: "Category",
        components:{CategoryList, DropDownMenu}
    }
</script>

<style lang="less" scoped>
   #category {
      padding: 49px 0 0;
   }
   .bottom-padding {
       padding-bottom: 49px !important;
   }
</style>
