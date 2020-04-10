import axios from 'axios'

export function request(config) {
  //  创建asios实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 5000
  })

  return instance(config)
}
