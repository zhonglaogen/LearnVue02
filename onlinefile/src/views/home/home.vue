<template>
  <div>
    <headbar></headbar>
    <router-view></router-view>
  </div>

</template>

<script>
  import headbar from "../bar/headbar";
    export default {
        name: "home",
        components: {
            headbar
        }
    }
</script>

<style scoped>

</style>