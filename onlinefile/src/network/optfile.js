import {request} from "./request";

import Qs from 'qs'

//插入档案
export function netInsertFile(obj){
    return  request({
        url: '/message/insertfile',
        method: 'post',
        data: obj
    })
}
//查看历史档案
export function netHistoryFile(obj){
    return  request({
        url: '/message/history',
        method: 'get',
        params: obj
    })
}
//查找档案
export function netFindFile(obj){
    return  request({
        url: '/message/usermsg',
        method: 'post',
        data: obj
    })
}
//查看公告
export function netShowMsg() {
    return  request({
        url: '/out/showMSg',
        method: 'get'
    })

}




