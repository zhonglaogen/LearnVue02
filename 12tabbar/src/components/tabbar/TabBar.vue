<template>
  <div id="tar-bar">
   <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>



  #tar-bar{
    /*水平*/
    display: flex;
    background-color: #f4f4f4;
    /*放在下面*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /*阴影，x，y偏移量，模糊值，颜色*/
    box-shadow: 0px  -1px 1px rgba(100,100,100,.3);
  }


</style>
