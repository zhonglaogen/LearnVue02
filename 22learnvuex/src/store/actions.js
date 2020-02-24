export default  {
  //上下文
  // aUpdateInfo(context,age){
  //   setTimeout(()=> {
  //   //  应该在这里跳转，mutation
  //     context.commit('updateInfo',age)
  //     //这里如果参数穿的是函数类型，可以回调函数，通知外面已经成功
  //   },1000)
  // }

  //  优雅的回调
  aUpdateInfo(context,age){
    new Promise((resolve,reject) => {
      setTimeout(()=> {
        //  应该在这里跳转，mutation
        context.commit('updateInfo',age)
        resolve()
        //这里如果参数穿的是函数类型，可以回调函数，通知外面已经成功
      },1000)
    })
    //  注意不是在这里写then函数，而是在调用者那里写then函数
  }

}
