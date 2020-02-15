<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot  name="item-icon"></slot>
    </div>
    <div v-else>
      <slot  name="item-icon-active"></slot>
    </div>


    <div v-bind:style="activeStyle">
<!--      因为插槽会被完全替换，所以用div替换class效果-->
      <slot  name="item-text"></slot>
    </div>


  </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      data(){
        return {
          // isActive: true,
          // path: '/home'
        }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) != -1
        },
        activeStyle(){
          return this.isActive ? {color: this.activeColor} : {}
        }
      },
      props: {
        path: String,
        activeColor: {
          type: String,
          default: 'red'
        }
      },
      methods: {
        itemClick(){
          console.log(this.path);
          if (this.$route.path != this.path){
            this.$router.replace(this.path)
          }
          console.log('首页切换');
        }
      }
    }
</script>

<style scoped>
  .tab-bar-item{
    /*等边距*/
    flex: 1;
    /*居中*/
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    /*去掉图片和文字之间的间隔*/
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
