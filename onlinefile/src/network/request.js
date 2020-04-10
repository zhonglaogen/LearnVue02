import axios from 'axios'

export function request (config) {

    const instance = axios.create({
        baseURL: 'http://localhost:8081',
        timeout: 5000
    })


    // 拦截器
    instance.interceptors.request.use(config => {
        //请求配置
        return config
    }, error => {
        //请求失败
        console.log(error);
    })

    instance.interceptors.response.use(res =>{
        //  相应结果,只返回data
        return res
    }, error => {
        // 响应失败
    })

    return instance(config)
}