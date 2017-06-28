// import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import List from './components/listdemo.vue'
import Switchdemo from './components/navigator.vue'
import OscListdemo from './components/app.vue'

Vue.use(Router)

export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/home', component: Home },
        { path: '/list', component: List },
        { path: '/navigator', component: Switchdemo },
        { path: '/', redirect: '/home' }
    ]
})
