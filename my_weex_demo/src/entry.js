// import Vue from 'vue'
import App from './app.vue'
import router from './router'
import mixins from './mixins'
import listdemo from './components/listdemo.vue'
import home from './components/home.vue'
import homechild from './components/homechild.vue'

import store from './store'
import { sync } from 'vuex-router-sync'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
Vue.component('homechild', homechild);

// register global mixins.
Vue.mixin(mixins)

new Vue(Vue.util.extend({ el: '#root', router, store }, App))

router.push('/')


