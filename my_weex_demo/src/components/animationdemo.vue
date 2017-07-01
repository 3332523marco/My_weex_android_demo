<template>
  <div class="wrapper">
    <div ref="test" @click="move" class="box"></div>
    <text ref="test2">hahaha</text>
  </div>
</template>

<script>
  const animation = weex.requireModule('animation')
  const modal = weex.requireModule('modal')

  export default {
    methods: {
      move () {
        var testEl = this.$refs.test;
        animation.transition(testEl, {
          styles: {
            color: '#FF0000',
            transform: 'translate(0px, 100px)',
            transformOrigin: 'center center'
          },
          duration: 500, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
          // modal.toast({ message: 'animation finished.' })
        })
        
         var testEl2 = this.$refs.test2;
        animation.transition(testEl2, {
          styles: {
            color: '#FF0000',
            transform: 'translate(0px, 100px)',
            transformOrigin: 'center center'
          },
          duration: 500, //ms
          timingFunction: 'ease',
          delay: 0 //ms
        }, function () {
          // modal.toast({ message: 'animation finished.' })
        })
      }
    }
  }
</script>

<style scoped>
  .box {
    width: 900px;
    height: 250px;
    background-color: #DDD;
  }
</style>