import {request} from "./request";

export function netRegist(user){
   return  request({
        url: '/ouser/regist',
        method: 'post',
        params: user
    })
}

export function netLogin(user) {
    return request({
        url: '/ouser/login',
        method: 'get',
        params: user
    })
}

