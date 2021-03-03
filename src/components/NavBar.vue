<template>
  <view class='navContainer'>
    <view 
      :class="['navItem', {'is-active': activeIdx === idx}]"
      v-for='(item, idx) in list' 
      :key='item.value'
      @click.stop="handleClick(item, idx)"
    >
      <view :class="['iconfont', 'item-icon', 'icon-' + item.value]"></view>
      <text class="item-text">{{item.label}}</text>
    </view>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    console.log(store)
    const list = reactive(store.state.tabList)
    let activeIdx = ref(store.state.activeIdx) // 当前激活navbar索引

    /**
     * @description: 点击切换navbar
     * @param {Object} item 点击navbar item 
     * @param {Number} idx 点击navbar索引
     * @returns void
     */
    const handleClick = (item, idx) => {
      activeIdx.value = idx
      store.dispatch('changeActiveIdx', idx)
      Taro.switchTab({
        url: item.url
      })
    }

    return {
      list,
      activeIdx,
      handleClick
    }
  }
}
</script>

<style lang='scss' scoped>
  .navContainer {
    height: 120px;
    width: 100vw;
    display: flex;
    border-top: 1px solid rgba(225, 225, 255, 0.5);
    .navItem {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      &.is-active {
        color: #37e;
      }
      .item-icon {
        font-size: 30px;
      }
    }
  }
</style>