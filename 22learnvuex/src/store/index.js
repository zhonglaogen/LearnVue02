import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

Vue.use(Vuex)

const state =   {
  counter: 0,
    info: {name: 'zlx', age: 18}
}



const  store = new Vuex.Store({
  //保存状态
  state,
  //会被浏览器的插件检测到
  mutations,
  //异步函数要经过这个
  actions,
  //相当于计算属性
  getters,
  // 划分模块,例如划分地区，相当于是小的store
  modules: {
    a:moduleA,
    b:moduleB
  }
})

export default store
