<template>
  <div>
    <h2>我是cpn组件的标题</h2>
    <p>我是cpn组件的内容</p>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
    export default {
        name: "Cpn",
        data(){
            return {
                message: 'iiiii'
            }
        }
    }
</script>

<style scoped>

</style>