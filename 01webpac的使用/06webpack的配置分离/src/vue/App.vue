<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn.vue'

    export default {
        name: "app",
        data(){
            return {
                message: 'hello world'
            }
        },
        methods: {
            btnClick(){
                console.log('bbb');
            }
        },
        components: {
            Cpn
        }
    }
</script>

<style scoped>
  .title{
    color: green;
  }

</style>