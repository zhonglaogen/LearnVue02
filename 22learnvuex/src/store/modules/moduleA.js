export default {
  state: {
    xxx: 'xxxxxxxxxxx'
  },
  mutations: {
    updateXXX(state){
      state.xxx = 'yyyyyyyyy'
    }
  },
  actions: {
    //这里的context也是这个模块的上下文
    aUpdateXXX(context){

    }
  },
  getters: {
    fullName(state){
      return  state.xxx + 'fullName'
    },
    //第二个参数为本模块的getter
    fullName2(state,getter){
      return  getter.fullName + '22222'
    },
    //第三个参数为跟module，能拿到跟的state
    fullName3(state,getter,rootState){
      return  getter.fullName + '22222'
    }
  },
  modules: {}
}
