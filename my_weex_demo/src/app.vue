<template>
    <div style="flex-direction: column;">
        <Osctabbar :tabType="1" height="120" :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></Osctabbar>
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
                    titleColor: '#979797',
                    icon: '',
                    image: 'file://assets/components/img/main_tab_home_unpress.png',
                    selectedImage: 'file://assets/components/img/main_tab_home_press.png',
                    src: 'file://assets/components/list_appear_demo.js',
                    visibility: 'visible'
                }, {
                    index: 1,
                    title: '跳转',
                    titleColor: '#979797',
                    icon: '',
                    image: 'file://assets/components/img/main_tab_list_unpress.png',
                    selectedImage: 'file://assets/components/img/main_tab_list_press.png',
                    src: 'file://assets/components/tab.js',
                    visibility: 'hidden'
                }, {
                    index: 2,
                    title: '列表',
                    titleColor: '#979797',
                    icon: '',
                    image: 'file://assets/components/img/main_tab_more_unpress.png',
                    selectedImage: 'file://assets/components/img/main_tab_more_press.png',
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
