<template>
  <div>
    <h2 v-if="$store.getters.hasFriend">{{$store.state.currentFriend.name}}</h2>
    <h2 v-else>请选择朋友</h2>
  </div>
</template>

<script>
    export default {
        name: "ChooseFriend"
    }
</script>

<style scoped>

</style>
