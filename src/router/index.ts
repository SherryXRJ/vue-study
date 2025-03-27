//  创建一个路由器
import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

import Detail from '@/pages/Detail.vue'


//  路由配置
//  history模式 url不需要携带#  但需要服务端配合处理
//  hash模式  url带有#  不需要服务端配合处理

const router = createRouter(
  {
    history: createWebHistory(),
    routes:[
      {
        name:'homeName',
        path:'/home',
        component:Home
      },
      {
        name:'newsName',
        path:'/news',
        component:News,
        //  路由嵌套 子级路由
        // children:[
        //   {
        //     name:'detailName',
        //     //  子级路由不需要/
        //     path:'detail',
        //     component:Detail
        //   }

        //  param传参
          children:[
            {
              name:'detailName',
              //  子级路由不需要/
              
              path:'detail',
              component:Detail,
              //  将路由收到所有params参数 传递到props   path:'detail/:id/:title/:content'
              // props: true

              //  函数写法参数 针对query传参
              props(route){
                return route.query
              }

              //  对象写法 (写死)
              // props:{
                
              // }
            }
        ]
      },
      {
        name:'aboutName',
        path:'/about',
        component:About
      }
    ]
  }
)

//  暴露router
export default router