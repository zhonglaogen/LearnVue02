// 配置路由相关信息
import VueRouter from 'vue-router'
import vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'


const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')


const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = ()=> import('../components/Profile')


//1.通过Vue.use（插件），安装插件
vue.use(VueRouter)

//2创建路由对象
const routes = [
  {
    path: '',
    //是首页但是路径不是首页路径，所以不用
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]

  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    //路由独享守卫
    beforeEnter: (to,from,next) => {
      // console.log('组件路由');
      next()
    }
  },
  {
    //动态路由
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]
const router = new VueRouter({
    //配置路由和组件之间的应用关系
  routes,
  //带#的是hash模式，改成history模式就没有#了
  mode: 'history',
  //选中的路由组件起别名,统一修改
  linkActiveClass: "aaaa"
})

//前置守卫（guard），跳转前回调
router.beforeEach(function (to,from,next) {
  // console.log(to);
  document.title = to.matched[0].meta.title
  //下一步
  next()
})
//后置钩子（hook）
router.afterEach((to,from) => {
  // console.log('后置钩子');
})

// 3 将router对象传入vue实例中
export default router
