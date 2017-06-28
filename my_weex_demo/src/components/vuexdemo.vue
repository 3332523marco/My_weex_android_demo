<template>
    <div>
        <div>
             Clicked: {{ stories }} times

            <text @click="increment">+</text>
            <text @click="decrement">-</text>
            <text @click="incrementIfOdd">Increment if odd</text>
            <text @click="incrementAsync">Increment async</text>
        </div>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import store from '../store'

export default {
    data() {
            return {
                repoName: null,
                loading: true,
                readMe: null,
                description: null
            }
        },
        //mapGetters 辅助函数仅仅是将 store 中的 getters 映射到局部计算属性
        computed: {
            stories() {
                return this.$store.getters.activeIds
            }
        } 
        //Action 类似于 mutation，不同在于：
        //Action 提交的是 mutation，而不是直接变更状态。
        //Action 可以包含任意异步操作。
        // methods: mapActions([
        //     'increment',
        //     'decrement',
        //     'incrementIfOdd',
        //     'incrementAsync'
        // ])
}
</script>
<style>
.desc {
    margin-top: 16px
}
</style>
