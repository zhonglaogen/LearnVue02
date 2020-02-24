import Vue from 'vue'
import App from './App'
import router from './router'
import {request} from './network/request'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//使用全局的 axios和对应配置请求
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// axios({
//   url: '/home/multidata',
//   method: 'get'
// }).then(data => {
//   console.log(data);
// })
//
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   method: 'get',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(data => {
//   console.log(data);
// })
//
// axios.all([axios(),axios]).then(res => {
//   console.log(res[0]);
// })
//
// //可同时拿到两个
// axios.all([axios(),axios])
//   .then(
//     axios.spread(
//       (res1,res2) => {
//
// })
//   )


//不用全局的axios，创建对应的axios实例
// const instance = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance({
//   url: '/home/multidata',
// }).then(data => {
//   console.log(data);
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).then(res => {
  console.log(res);
})


// 数组的解构
// const [name1,name2,name3] = arry


