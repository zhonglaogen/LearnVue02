// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

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
