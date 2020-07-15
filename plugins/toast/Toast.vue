<template>
    <div id="toast" :class="{'animat':isShow}" v-show="isShow">
        {{message}}
    </div>
</template>

<script>
    export default {
        name: "Toast",
        props: {
            message: String,
            default: '温馨提示',
            isShow: false
        },
        data() {
            return {}
        },
        methods: {
            toast(message) {
                this.message = message
                this.isShow = true
                setTimeout(() => {
                    this.isShow = false
                }, 3000)
            }
        }
    }
</script>

<style scoped>
    #toast {
        color: white;
        font-size: 16px;
        text-align: center;
        background-color: rgba(0, 0, 0, .6);
        padding: 20px 10px;
        width: 300px;
        position: fixed;
        z-index: 9999;
        bottom: 20%;
        left: 50%;
        border-radius: 10px;
        transform: translate(-50%, 0);
    }

    .animat {
        animation: fade 3s ;
    }

    @keyframes fade {
        1% {
            opacity: 1;
        }
        89% {
            opacity: 1;
        }
        90% {
            opacity: 0.9;
        }
       91% {
            opacity: 0.8;
        }
        92% {
            opacity: 0.7;
        }
        93% {
            opacity: 0.6;
        }
        94% {
            opacity: 0.5;
        }
        95% {
            opacity: 0.4;
        }
        96% {
            opacity: 0.3;
        }
       97% {
            opacity: 0.2;
        }98% {
            opacity: 0.1;
        }100% {
            opacity: 0;
        }

    }
</style>
