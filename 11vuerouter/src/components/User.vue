<template>
  <div>
    <h2>我是标题3</h2>
    <p>我是用户相关信息，嘿嘿嘿</p>
    <h1>{{userName}}</h1>
    <h1>{{$route.params.userId}}</h1>
  </div>
</template>

<script>
    export default {
        name: "User",
      computed: {
        userName(){
          //$route 指的是谁处于路由活跃的对象，router指的是创建的那个router对象
          return this.$route.params.userId
        }
      },
    }
</script>

<style scoped>

</style>
