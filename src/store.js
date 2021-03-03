import { createStore } from 'vuex'

const state = {
  numbers: [1, 2, 3],
  activeIdx: 0, // 当前激活tab index
  tabList: [ // tabbar list
    {
      label: '福利',
      value: 'fuli',
      url: '/pages/fuli/fuli'
    },
    {
      label: '书城',
      value: 'book',
      url: '/pages/book/book'
    },
    {
      label: '听书',
      value: 'tingshu',
      url: '/pages/tingshu/tingshu'
    }
  ]
}

const mutations = {
  ADD_NUMBER(state, payload) {
    state.numbers.push(payload)
  },
  CHANGE_ACTIVE_IDX (state, idx) {
    state.activeIdx = idx
  }
}

const actions = {
  addNumber(context, number) {
    context.commit('ADD_NUMBER', number)
  },
  changeActiveIdx (context, idx) {
    context.commit('CHANGE_ACTIVE_IDX', idx)
  }
}

const getters = {
  getNumbers(state) {
    return state.numbers
  },
  getActiveIdx (state) {
    return state.sctiveIdx
  },
  getTabList (state) {
    return state.tabList
  }
}

const store = createStore({
  state,
  mutations,
  actions,
  getters
})

export default store
