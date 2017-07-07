<template>
    <text class="textfont">我是来自子view</text>
</template>
<script>
module.exports = {
    data: {
        items: []
    },
    methods: {
        tt(e) {
           e('hahha');
        }
    }
}
</script>
<style scoped>
.textfont {
    text-align: center;
    padding-top: 20px;
}
</style>
