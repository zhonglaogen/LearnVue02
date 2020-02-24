export default {
  powerCounter(state){
    return state.counter * state.counter
  },
  xxx(state){
    return state * 3
  },
  //可以传第二个参数getters
  xxxx(state,getters){
    getters.xxx * 3
  },
  yyy(state){
    return function (data) {
      //    传参数用的函数
      return data + 'yyy'
    }
  }
}
