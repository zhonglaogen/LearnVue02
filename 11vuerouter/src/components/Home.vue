<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
    export default {
        name: "Home",
      data(){
          return {
            path: '/home/news'
          }
      },
      created() {
        console.log('组件被创建');
        // document.title = '首页'
        // this.$router.push('/home/news')
      },
      mounted() {
        console.log('组件被挂载到dom');
      },
      updated() {
        console.log('界面刷新(数据发生变化)');
      },
      destroyed() {
        console.log('destory');
      },
      //界面处于活跃状态，这两个函数只有用keep-alive时才是有效的
      activated() {
          this.$router.push(this.path)
      },
      deactivated() {
          //记录的是离开后的url不行
          // this.path = this.$route.path
      },
      //组件守卫，负责存储上一次子组件的子组件界面
      beforeRouteLeave(to,from,next){
        this.path = this.$route.path
        next()
      }

    }
</script>

<style scoped>

</style>
