import axios from 'axios'


// export function request(config) {
//   return  new Promise((resolve,reject) => {
//     //  创建asios实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config).then(res => {
//       resolve(res)
//     }).catch(res => {
//       reject(res )
//     })
//   })
// }

export function request(config) {
  //  创建asios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 拦截器
  instance.interceptors.request.use(config => {
    //请求配置
    console.log(config);
    return config
  }, error => {
    //请求失败
    console.log(error);
  })

  instance.interceptors.response.use(res =>{
  //  相应结果,只返回data
    return res.data
  }, error => {
    // 响应失败
  })

  return instance(config)
}
