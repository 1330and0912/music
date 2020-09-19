<template>
    <div class="related-video">
        <m-v-list/>
    </div>
</template>

<script>
    import MVList from "../../mv/childComponents/MVList";
    import {getRelatedMVData} from "../../../../api";

    export default {
        name: "MVRelatedVideo",
        components: {MVList},
        data() {
            return {
                mvData:[]
            }
        },
        methods:{
            async getRelatedMVInfo(){
                getRelatedMVData()
            }
        }
    }
</script>

<style scoped>

</style>
