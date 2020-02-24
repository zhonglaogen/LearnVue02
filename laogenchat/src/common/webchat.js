import store from "../store";
const chat ={
  socket: null,
  init: function () {
    if (window.WebSocket) {
      chat.socket = new WebSocket("ws://localhost:8081/wschat");
      chat.socket.onopen = function () {
        (function () {
          const user = store.state.currentUser;
          const toUser = store.state.currentFriend;
          const command = 'regist'
          const msg = {
            user,
            toUser,
            command
          }
          chat.socket.send(JSON.stringify(msg));
        }())
        console.log("连接建立成功");
      },
        chat.socket.onclose = function () {
          console.log("连接关闭");
        },
        chat.socket.onerror = function () {
          console.log("发生错误");
        },
        chat.socket.onmessage = function (e) {
          console.log("接受到的消息：" + e.data);
          store.state.messages += '\n' + e.data;
        }
    } else {
      alert("浏览器不支持websocket协议");
    }
  },
  chat: function (msg) {
    if(!window.WebSocket){
      return false;
    }
    // if(this.socket.readyState = WebSocket.OPEN){
      chat.socket.send(JSON.stringify(msg));
    console.log('已发');
    // }else {
    //   alert('没有连接')
    // }

  }
}


export default chat

