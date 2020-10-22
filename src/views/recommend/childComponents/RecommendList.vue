<template>
    <div class="recommend-list">
        <recommend-list-item
                ref="item"
                @setItemPosition="setPosition"
                :key="item.id"

                v-for="(item,index) in dataList"
                :value="item"/>
    </div>
</template>

<script>
    import RecommendListItem from "./RecommendListItem";

    export default {
        name: "RecommendList",
        components: {RecommendListItem},
        props: {
            dataList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                heights: [],
                col1: 0,
                col2: 0,
                lh: 0,
                rh: 0
            }
        },
        watch: {
            heights(v) {
                if (v.length >= this.dataList.length) {
                    console.log(v);
                    v.forEach((item, index) => {

                        if (index < 2) {
                            this.$refs.item[index].$el.style.left = index * 50 +2+ '%'
                            this.$refs.item[index].$el.style.top = 60 + 'px'
                            console.log(this.$refs.item[index].$el.style.left);
                            if (this.$refs.item[index].$el.style.left == '52%') {
                                this.col2 += this.heights[index]
                                this.rh += this.heights[index] + 70
                            } else {
                                this.col1 += this.heights[index]
                                this.lh += this.heights[index] + 70
                            }

                        } else {

                            if (this.col2 > this.col1) {
                                this.$refs.item[index].$el.style.top = this.lh + 'px'
                                this.$refs.item[index].$el.style.left = 2 + '%'
                            } else {
                                this.$refs.item[index].$el.style.top = this.rh + 'px'
                                this.$refs.item[index].$el.style.left = 52+ '%'
                            }

                            if (this.$refs.item[index].$el.style.left == '52%') {
                                this.col2 += this.heights[index]
                                this.rh += this.heights[index] + 10
                            } else {
                                this.col1 += this.heights[index]
                                this.lh += this.heights[index] + 10
                            }
                        }
                        // this.$nextTick(() => {
                        //     // console.log(this.$refs.item[index].$el.offsetLeft);
                        // })
                    })
                }
            }
        },
        methods: {
            setPosition(h) {
                this.heights.push(h)
            }
        }
    }
</script>

<style scoped>
    .recommend-list {
        height: 100%;
        width: 100%;
    }
</style>
