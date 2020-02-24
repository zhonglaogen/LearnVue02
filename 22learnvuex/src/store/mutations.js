import {INCREMENT} from "./mutations-types";

export default {
  //函数的另外一种常量命名方法
  [INCREMENT](state){
    state.counter++
  },
  decrement(state){
    state.counter--
  },
  incrCount(state,payload){
    state.counter += payload.count
  },
  updateInfo(state,age){
    state.info.age = age
  }
}
