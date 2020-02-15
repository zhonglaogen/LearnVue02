import Vue from 'vue'
import App from './App'
//会自动找index文件
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//后端渲染，后端路由，有后端发送页面，选择页面（根据url）
//前后端分离
//spa页面，单页福应用，整个网页只有一个html，其实就是在前后端分离的基础下加了一个前段路由

//为了做到前端路由，必须能更改url但是不向后端发送请求
//location.hash = 'aaa' 更改url，但是不请求后端、、、、location.href = 'aaa'会刷新
//html5y也可以用history.pushState（{}，‘‘，’url‘），可连续压栈  history.back（）可以移除，相当于回退
//history.replaceState({},'','新的url')把之前的url换成新的url，不能返回，不会保留历史记录
//history.go(数字)，用在push的时候，可以指向任意一个位置 go（-1） = back（） 正数为前进 forward（）
