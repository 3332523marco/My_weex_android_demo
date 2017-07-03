<template>
    <div style="flex-direction: column;">
        <Osctabbar :tabType="1" :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></Osctabbar>
    </div>
</template>
<script>
import Osctabbar from './components/customview/osc-tabbar.vue'
import tr from './components/listdemo.vue'

export default {
    data() {
            return {
                tabItems: [{
                    index: 0,
                    title: '首页',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/list_appear_demo.js',
                    visibility: 'visible'
                }, {
                    index: 1,
                    title: '跳转',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/home.js',
                    visibility: 'hidden'
                }, {
                    index: 2,
                    title: '列表',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
                    src: 'file://assets/components/listdemo.js',
                    visibility: 'hidden'
                }]
            }
        },
        components: {
            Osctabbar,
            tr
        },
        methods: {
            tabBarOnClick(e) {
                console.log('tabBarOnClick', e.index)
                // this.$emit('a-msg','hello world!!!');

            }
        }
}
</script>


<!-- <template>
    <div>
        <Header/>
            <router-view></router-view>
    </div>
</template>
<script>
import Header from './components/customview/header.vue'

module.exports = {
    components: {
        Header
    }
}
</script>
 -->