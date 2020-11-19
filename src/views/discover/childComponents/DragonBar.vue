<template>
    <div class="dragon-bar">
        <div class="item" :key="item.id" v-for="item in list">
            <div class="icon">
                <img v-lazy="item.iconUrl+'?param=50y50'"/>
            </div>
            <div class="text">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
    import {getDragonBar} from "../../../api";

    export default {
        name: "DragonBar",
        data() {
            return {
                list: []
            }
        },
        async created() {
            getDragonBar().then(res => {
                this.list = res.data
            })
        }
    }
</script>

<style lang="less" scoped>
    .dragon-bar {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .item {
        flex-shrink: 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        .icon {
            width: 40px;
            height: 40px;
            background-color: #FF3A3A;
            border-radius: 50%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .text{
            margin-top: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
    }
</style>
