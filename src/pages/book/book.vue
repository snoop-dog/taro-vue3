<template>
  <view class="bookContainer">
    <view class="bookMain">
      <view class="mainTop">
        <view class="mainStatic"></view>
        <view class="mainBody">
          <view class="mainLogo">
            <view class="logoImage"></view>
          </view>
          <view class="mainInput">
            <input class="inputInner" type="text" placeholder="搜索" focus>
          </view>
        </view>
      </view>
    </view>
    <NavBar class="navBar" v-if="idx === 1"></NavBar>
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
.bookContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .navBar {
    flex: 0 0 120px;
  }
  .bookMain {
    flex: 1;
    .mainTop {
      margin-bottom: 12px;
      padding-bottom: 80px;
      background: #17181a;
      .mainStatic {
        z-index: 80;
        width: 100%;
        height: 144px;
        position: static;
        background-color: #17181a;
      }
      .mainBody {
        margin-top: 8px;
        .mainLogo {
          display: flex;
          align-items: center;
          justify-content: center;
          .logoImage {
            width: 250px;
            height: 54px;
            background: url(https://weread-1258476243.file.myqcloud.com/web/wrwebnjlogic/image/search_header_logo_small.f3eadf13.png) no-repeat;
            background-size: 100%;
          }
        }
        .mainInput {
          position: relative;
          width: 80%;
          max-width: 840px;
          margin: 48px auto 0;
          .inputInner {
            width: 100%;
            padding: 0 75px;
            box-sizing: border-box;
            height: 75px;
            line-height: 75px;
            border-radius: 37.5px;
            font-size: 32px;
            color: #eef0f4;
            background: rgba(238,240,244,.1);
            .weui-input {
              height: 100%;
              line-height: 75px;
            }
          }
        }
      }
    }
  }
}
</style>