<template>
    <div>
        <Header/>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from './components/header.vue'

module.exports = {
    data: {
        items: []
    },
    components: {
        Header
    }
}
</script>
