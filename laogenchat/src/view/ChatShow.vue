<template>
  <div>
    <textarea id="msgText" cols="50" rows="20" readonly :value="$store.state.messages"/>
    <br>
    <input type="text" v-model="smsg" @keyup.enter="sendMsg(smsg)"/>
    <h2>{{smsg}}</h2>
    <button :disabled="$store.getters.canClick" @click="sendMsg(smsg)">发送</button>
  </div>
</template>

<script>

    export default {
        name: "ChatShow",
        data(){
          return {
            smsg: ''
          }
        },
        created() {

        },
      methods:{
          sendMsg(msg){
            let fullMsg = {
              msg,
              user: this.$store.state.currentUser,
              toUser: this.$store.state.currentFriend,
              command: 'sendFriend'
            }
            Window.chat.chat(fullMsg)
            this.smsg = ''

          }
      }
    }
</script>

<style scoped>

</style>
