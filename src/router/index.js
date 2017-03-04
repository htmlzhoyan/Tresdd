import Vue from 'vue'
import Router from 'vue-router'
import app from 'app'
import chongzhi from 'components/chongzhi'
import dailian from 'components/dailian'
import youxi from 'components/youxi'
import zhanghao from 'components/zhanghao'
import zhuangbei from 'components/zhuangbei'
import header from 'components/header'
import client from 'components/client'
import shou from 'components/shou'
//import $ from 'jquery'
Vue.use(Router)

export default new Router({
  routes: [
//  {
//    path: '/tap',
//    name: 'youxi',
//    component: client,
//    		children:[				
//				{path:'/client',name:'duanyou',component:client},
//				{path:'/shou',name:'shouyou',component:shou}
//			]
//  },
    {
      path: '/client',
      name: 'client',
      component: client
    },
    {
      path: '/shou',
      name: 'shou',
      component: shou
    },
    {
    	path: '*',
    	redirect: "/client"
    }
//  {
//    path: '/new',
//    name: 'dailian',
//    component: dailian
//  },
//  {
//    path: '/chongzhi',
//    name: 'chongzhi',
//    component: chongzhi
//  },
//  {
//  	path: '*',
//  	redirect: "/youxi"
//  }
  ]
})

