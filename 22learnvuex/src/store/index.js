import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "./mutations-types";

Vue.use(Vuex)

const  store = new Vuex.Store({
  //保存状态
  state: {
    counter: 0,
    info: {name: 'zlx', age: 18}
  },
  //会被浏览器的插件检测到
  mutations: {
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
  },
  //异步函数要经过这个
  actions: {
    //上下文
    // aUpdateInfo(context,age){
    //   setTimeout(()=> {
    //   //  应该在这里跳转，mutation
    //     context.commit('updateInfo',age)
    //     //这里如果参数穿的是函数类型，可以回调函数，通知外面已经成功
    //   },1000)
    // }

  //  优雅的回调
    aUpdateInfo(context,age){
      new Promise((resolve,reject) => {
        setTimeout(()=> {
          //  应该在这里跳转，mutation
          context.commit('updateInfo',age)
          resolve()
          //这里如果参数穿的是函数类型，可以回调函数，通知外面已经成功
        },1000)
      })
    //  注意不是在这里写then函数，而是在调用者那里写then函数
    }

  },
  //相当于计算属性
  getters: {
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
  },
  // 划分模块,例如划分地区，相当于是小的store
  modules: {
    a: {
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
    },
    b: {

    }
  }
})

export default store
