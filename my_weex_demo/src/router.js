// import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import List from './components/list.vue'
import Navigator from './components/navigator.vue'

Vue.use(Router)

export default new Router({
    // mode: 'abstract',
    routes: [
        { path: '/home', component: Home },
        { path: '/list', component: List },
        { path: '/navigator', component: Navigator },
        { path: '/', redirect: '/home' }
    ]
})
