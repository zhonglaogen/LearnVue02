<template>
  <div>
    <h2>当前用户</h2>
    <div class="div-inline" v-for="item in myfriends">
      <button style="font-size: 50px" @click="chooseUser(item)">{{item.name}}</button>
      -----
    </div>

    <h2>选择朋友</h2>
    <div class="div-inline" v-for="item in myfriends">
      <button style="font-size: 50px" @click="chooseFriend(item)">{{item.name}}</button>
      -----
    </div>
  </div>

</template>

<script>
    import {request} from "../network/request";

    export default {
      name: "ChatWindow",
      data() {
          return {
            message: 'xxx',
            myfriends: []
          }
      },
      created() {
        request({
          url: '/get_user'
        }).then(res => {
          this.myfriends = res.data.data
          console.log(res.data.data);
        })

      },
      methods: {
        chooseUser(user){
          this.$store.commit({
            type: 'sChooseUser',
            user
          })
        },
        chooseFriend(friend){
          this.$store.commit({
            type: 'sChooseFriend',
            friend
          })
        }
      }
    }
</script>

<style scoped>

  .div-inline{ display:inline}

</style>
