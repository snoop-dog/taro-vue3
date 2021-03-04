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
      <view class="mainBottom">
        <view class="rankContainer">
          <view class="rankHeader"></view>
          <view class="rankBody">
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
            <view class="bookItem">
              <image 
                src="https://wfqqreader-1252317822.image.myqcloud.com/cover/199/22261199/t6_22261199.jpg"
                style="width: 55px; height: 80px"
              />
              <view class="bookIndex">
                <text class="bookName">1  剑来</text>
                <text class="authorName">烽火戏诸侯</text>
              </view>
            </view>
          </view>
          <view class="rankFooter"></view>
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
    store.dispatch('changeActiveIdx', 1)
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
    overflow-y: auto;
    .mainTop {
      // margin-bottom: 12px;
      padding-bottom: 80px;
      background: #17181a;
      .mainStatic {
        z-index: 80;
        width: 100%;
        height: 144px;
        position: static;
        // background-color: #17181a;
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
            ::v-deep .weui-input {
              height: 100%;
              line-height: 75px;
            }
          }
        }
      }
    }
    .mainBottom {
      height: auto;
      // background: #1f2022;
      .rankContainer {
        // margin-bottom: 40px;
        // width: 49%;
        height: auto;
        box-sizing: border-box;
        width: 100%;
        padding: 20px 40px;
        .rankHeader {
          padding: 24px 0 0;
          height: 42.5px;
          background: url('https://weread-1258476243.file.myqcloud.com/assets/ranklist.novel.chart_title.ZPYpNvEHel.png') no-repeat;
          background-size: 50% 100%;
        }
        .rankBody {
          .bookItem {
            display: flex;
            padding: 12px 0;
            .bookIndex {
              display: flex;
              flex-direction: column;
              font-size: 16px;
              justify-content: center;
              padding-left: 30px;
              .bookName {
                font-size: 30px;
                font-weight: 600;
              }
              .authorName {
                color: #666;
                font-size: 15px;
                margin: 12px 0 0 30px;
              }
            }
          }
        }
      }
    }
  }
}
</style>