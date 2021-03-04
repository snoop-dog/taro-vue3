<template>
  <view class="fuliContainer">
    <view class="fuliMain">fuli</view>
    <NavBar class="navBar" v-if="idx === 0"></NavBar>
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
    store.dispatch('changeActiveIdx', 0)
    const idx = computed(() => store.state.activeIdx)

    return {
      idx
    }
  }
}
</script>

<style lang="scss" scoped>
.fuliContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .navBar {
    flex: 0 0 120px;
  }
  .fuliMain {
    flex: 1;
  }
}
</style>