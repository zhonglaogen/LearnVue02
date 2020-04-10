import Vue from "vue"
import Router from "vue-router"

const Login = () => import('../views/login/login')
const Regist = () => import('../views/regist/regist')
const home = () => import('../views/home/home')
const Mianshow = () => import('../views/content/mainshow')
const ManageFile = () => import('../views/content/optfile/managefile')
const Message = () => import('../views/content/message')
const About = () => import('../views/content/about')
const History = () => import('../views/content/optfile/history')
const FindFile = () => import('../views/content/optfile/findfile')

Vue.use(Router)

const routes = [
    {
        path: '',
        //是首页但是路径不是首页路径，所以不用
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/regist',
        component: Regist,
        meta: {
            title: '注册'
        }
    },
    {
        path: '/home',
        component: home,
        meta: {
            title: '首页'
        },
        children: [
            {
              path: '',
              redirect: 'mianshow'
            },
            {
                path: 'mianshow',
                component: Mianshow
            },
            {
                path: 'managefile',
                component: ManageFile
            },
            {
                path: 'message',
                component: Message
            },
            {
                path: 'about',
                component: About
            },
            {
                path: 'history',
                component: History
            },
            {
                path: 'findfile',
                component: FindFile
            }
        ]
    }
]

export default new Router({
    routes,
    //不带#的地址
    mode: 'history',
})