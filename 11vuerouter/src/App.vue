<template>
  <div id="app">
    <router-link to="/home" tag="button" replace > 首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+userName" tag="button" replace>user</router-link>
<!--    <router-link to="/profile" tag="button" replace>档案</router-link>-->
    <router-link :to="{path: '/profile',query: {name: 'zlx',age: '99'}}" tag="button" replace>档案</router-link>
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  // 标签上active-class="activity" 起别名
export default {
  name: 'App',
  data(){
    return {
      userName: 'zlx'
    }
  },
  methods:{
    //通过代码的方式修改路由
    homeClick(){
      this.$router.push('/home')
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  }
}
</script>

<style>

  .aaaa{
    color: yellow;
  }

</style>
