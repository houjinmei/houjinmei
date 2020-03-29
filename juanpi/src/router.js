import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from './views/HomeIndex'//首页
import Home from './views/Home.vue'   //首页
import Kind from './views/Kind'       //分类页
import Cart from './views/Cart'       //购物车
import Cart1 from './views/Cart1'
import User from './views/User'       //我的
import Search from './views/Search'
import SpecialList from './views/SpecialList'
import Singlelist from './views/SingleList'
import Detail from './views/Detail'
import Listimg from './views/Listimg'
import Login from './views/Login'
import Register from './views/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:{name:'specialList'}
    },
    {
      path: '/home',
      name: 'home',
      redirect:{name:'homeindex'},
      component: Home,
      children:[
        {
          path: '/home/homeindex',
          name: 'homeindex',
          component: HomeIndex,
          redirect:{name:'specialList'},
          children:[
            {
              path:'/home/homeindex/search',
              name:'search',
              component:Search
            },
            {
              path:'/home/homeindex/speciallist',
              name:'specialList',
              component:SpecialList,
              children:[
              ]
            },
            {
              path:'/home/homeindex/singlelist',
              name:'singlelist',
              component:Singlelist
            }
          ]
        },
        {
          path: '/home/kind',
          name: 'kind',
          component:Kind
        },
        {
          path:'/home/cart',
          name:'cart',
          component:Cart
        },
        {
          path:'/home/cart1',
          name:'cart1',
          component:Cart1
        },
        {
          path:'/home/user',
          name:'user',
          component:User
        },
        {
          path:'/detail',
          name:'detail',
          component:Detail
        },
        {
          path: '/home/listimg',
          name: 'Listimg',
          component: Listimg,
        },
        {
          path:"/search",
          name:"Search",
          component:Search,
        },
        {
          path:'/login',
          name:'login',
          component:Login,
        },
        {
          path:'/register',
          name:'register',
          component:Register
        }
      ]
    },
    
  ]
})
