<template>
  <view class="tingshuContainer">
    <view class="tingshuMain">tingshu</view>
    <NavBar class="navBar" v-if="idx === 2"></NavBar>
  </view>
</template>

<script>
import NavBar from '@components/NavBar.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    NavBar
  },
  setup () {
    const store = useStore()
    const idx = computed(() => store.state.activeIdx)

    return {
      idx
    }
  }
}
</script>

<style lang="scss" scoped>
.tingshuContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .navBar {
    flex: 0 0 120px;
  }
  .tingshuMain {
    flex: 1;
    // background: url('https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg') no-repeat;
  }
}
</style>