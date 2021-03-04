<!--
 * @Description  : write something
 * @Author       : Qi.Linjie
 * @Date         : 2021-02-25 09:48:06
 * @LastEditors  : Qi.Linjie
 * @LastEditTime : 2021-03-02 10:59:56
 * @FilePath     : \my-taro\src\pages\index\index.vue
-->
<template>
  <view class="index">
    <view class="appMain"></view>
    <!-- <NavBar class="navBar"></NavBar> -->
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
// import NavBar from '@components/NavBar.vue'

export default {
  name: 'Index',
  // components: {
  //   NavBar
  // },
  setup () {
    Taro.switchTab({
      url: '/pages/fuli/fuli'
    })
  }
}
</script>

<style lang="scss" scoped>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .navBar {
    flex: 0 0 120px;
  }
  .appMain {
    flex: 1;
  }
}
</style>
