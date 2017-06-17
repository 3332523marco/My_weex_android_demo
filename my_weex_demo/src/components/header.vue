<template>
  <div class="header">
    <div class="logo" @click="jump('/')">
      <image class="image" src="https://gtms02.alicdn.com/tps/i2/TB1QHKjMXXXXXadXVXX20ySQVXX-512-512.png"></image>
    </div>
    <div class="nav">
      <div class="link" @click="jump('/home')">
        <text class="title">Home</text>
      </div>
      <div class="link" @click="jump('/list')">
        <text class="title">List</text>
      </div>
       <div class="link" @click="jump('/navigator')">
        <text class="title">Navigator</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .header {
    position: relative;
    height: 120px;
    margin-bottom: 3px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
    background-color: #FF6600;
  }
  .logo {
    position: relative;
    width: 50px;
    height: 50px;
    top: 35px;
    left: 35px;
    border-width: 3px;
    border-style: solid;
    border-color: #FFFFFF;
  }
  .image {
    width: 44px;
    height: 44px;
  }
  .nav {
    display: flex;
    position: absolute;
    left: 120px;
    top: 35px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .link {
    padding-left: 15px;
    padding-right: 15px;
  }
  .title {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 32px;
    line-height: 44px;
    color: #FFFFFF;
  }
</style>
