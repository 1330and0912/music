<template>
    <div id="content" @scroll="scroll">
        <div class="header" :style="{backgroundColor:bc}">
            <span :style="{'color':color}" class="back" @click="$router.back()">返回</span>
            <div class="more">
                <van-icon :color="color" name="ellipsis"/>
            </div>
        </div>
        <div class="h-img" :style="{'opacity':opacity}">
            <img src="~assets/img/profile/user.jpg" alt="">
        </div>
        <div class="content">
            <slot ></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Content",
        data() {
            return {
                opacity: 1,
                bc:'transparent',
                color:'white'
            }
        },
        methods: {
            scroll(e) {
                let top = e.target.scrollTop;
                if (top >= 200) {
                    this.bc = 'white'
                    this.color='black'
                }else {
                    this.color='white'
                    this.bc = 'transparent'
                }
                if (top <= 300) {
                    let ratio = top / 300
                    this.opacity = 1 - ratio
                }
                this.$emit('scrolling',top)
            }
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
        z-index: 22;

        .more, .back {
            color: white;
        }

        .more {
            font-size: 26px;
            display: flex;
            align-items: center;
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
