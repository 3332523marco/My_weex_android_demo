// import Vue from 'vue'
import App from './app.vue'
import router from './router'
import mixins from './mixins'


// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.

// register global mixins.
Vue.mixin(mixins)

new Vue(Vue.util.extend({ el: '#root', router }, App))

router.push('/')

