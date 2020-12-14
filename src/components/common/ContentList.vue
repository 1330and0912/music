<template>
    <div id="content" @scroll="scroll">
        <div class="header" :style="{backgroundColor:bc}">
            <span :style="{'color':color}" class="back" @click="$router.back()">
                <i class="iconfont icon-zuojiantou"></i>
                {{title}}
            </span>
            <div class="more">
                <van-popover :offset="[-62,-21]" v-model="showPopover" trigger="click" :actions="actions">
                    <template #reference>
                        <van-icon size="28" :color="color" name="ellipsis"/>
                    </template>
                </van-popover>
            </div>
        </div>
        <div class="h-img" :style="{'opacity':opacity}">
            <img src="~assets/img/profile/user.jpg" alt="">
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data() {
            return {
                opacity: 1,
                bc: 'transparent',
                color: 'white',
                showPopover: false,
                actions: [
                    { text: '选项一', icon: 'add-o' },
                    { text: '选项二', icon: 'music-o' },
                    { text: '选项三', icon: 'more-o' },
                ],
            }
        },
        props: ['title'],
        methods: {
            scroll(e) {
                let top = e.target.scrollTop;
                if (top >= 251) {
                    this.bc = 'white'
                    this.color = 'black'
                    this.$emit('scroll', true)
                } else {
                    this.color = 'white'
                    this.bc = 'transparent'
                    this.$emit('scroll', false)
                }
                if (top <= 300) {
                    let ratio = top / 300
                    this.opacity = 1 - ratio
                }
                this.$emit('scrolling', top)
            }
        },
        activated() {
            this.color = 'white'
            this.bc = 'transparent'
            this.opacity = 1
        }
    }
</script>

<style lang="less" scoped>
    #content {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }

    .header {
        padding: 0 10px;
        height: 49px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1201;

        .more, .back {
            color: white;
        }

        .more {
            font-size: 26px;
            display: flex;
            align-items: center;
        }

        .back {
            display: flex;
            align-items: center;

            i {
                margin-right: 6px;
                font-size: 26px;
            }
        }
    }

    .h-img {
        width: 100%;
        height: 300px;

        img {
            width: 100%;
            height: 300px;
        }
    }

    .content {
        background-color: #F7F7F7;
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        margin-top: -40px;
        border-radius: 10px;
        height: 100%;
    }
</style>
