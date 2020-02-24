<template>
  <div>
    <h2 v-if="$store.getters.hasUser">{{$store.state.currentUser.name}}</h2>
    <h2 v-else>请选择当前用户</h2>
  </div>
</template>

<script>
    export default {
        name: "ChooseId"
    }
</script>

<style scoped>

</style>
