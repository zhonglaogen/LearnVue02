import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  messages: 'xxx',
  currentUser: {},
  currentFriend: {},
}

const store = new Vuex.Store({
  state,
  mutations: {
    sChooseUser(state,payload){
      state.currentUser = payload.user
      Window.chat.init()
    },
    sChooseFriend(state,payload){
      state.currentFriend = payload.friend
    }
  },
  getters: {
    hasUser(state) {
     return Object.keys(state.currentUser).length != 0
    },
    hasFriend(state) {
      return Object.keys(state.currentFriend).length != 0
    },
    canClick(state,getter){
      // 都存在才可以点击，返回false
      return !(getter.hasUser && getter.hasFriend)
    }

  }
})

export default store
