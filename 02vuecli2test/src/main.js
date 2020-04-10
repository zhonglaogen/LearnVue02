// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//没有Vue.config.productionTip = false这句代码，它会显示你生产模式的消息
//
// 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。
// 而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。
// 此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。

Vue.config.productionTip = false

const cpn = {
  template: '<div>{{message}}</div>>',
  data(){
    return {
      message: '你好'
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    //1.普通用法 createElement(标签，{标签的属性},[内容])
    // return createElement('h2',
    //   {clas: 'box'},
    //   ['hello world',createElement('button', ['按钮'])])

  //  2传入组件对象
    return createElement(cpn)

  }
})

// npm install @vue/cli -g


//runtime-comppiler
//template -> ast ->render函数 -> vdom ->Ui

//runtime-only(1性能高，2，下面代码量更小。轻6kb)
//render函数 -> vdom ->Ui
//那么.vue文件是由谁处理的呢？
//是由view-timeplate-complier解析成app对象，运行时代码已转成render函数

//vue-> 2.x -> flow-type(facebook)
//vue-> 3.x->typeScirpt(microsoft)
