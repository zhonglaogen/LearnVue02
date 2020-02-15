<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="addNum">+</button>
    <button @click="subNum">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateAge(age)">修改年龄</button>
    <hello-vuex />
    <h2>模块划分的表现形式</h2>
    <h2>{{$store.state.a.xxx}}</h2>
    <button @click="updateModule">{{$store.state.a.xxx}}</button>
    <h2>getter的用法,和外面的用法一样</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>双参数的get用法</h2>
    <h2>{{$store.getters.fullName2}}</h2>

  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from './store/mutations-types'
  export default {
    name: 'App',
    data(){
      return {
        message: 'hello',
        age: 1000
      }
    },
    components: {
      HelloVuex
    },
    methods: {
      addNum(){
        this.$store.commit(INCREMENT)
      },
      subNum(){
        this.$store.commit('decrement')
      },

      addCount(count){
        //普通的提封装
        // this.$store.commit('incrCount',count)
        //特殊的提交封装,记住取参数的时候就是payload.对象了
        this.$store.commit({
          type: 'incrCount',
          //传的不仅仅是参数了，是整个commit的对象
          count
        })
      },
      updateAge(age){
        this.$store.dispatch('aUpdateInfo',age).then(() => {
          console.log('回调成功');
        })
      },
      updateModule(){
        //store没有就去模块找，和外面的用法一样
        this.$store.commit('updateXXX')
      }


    }
  }
</script>

<style>

</style>
