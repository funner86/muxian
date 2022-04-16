import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import container from '../components/container'
import train from '../components/train'
import home from '../components/home'
import map from '../view/map'
import history from '../view/history'
import datachart from '../view/datachart'
import nodeadd from '../view/nodeadd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },

    {
      path: '/home',//父亲 --side{container(首页)  history（历史） datachart（图表）}  top
      name: 'home',
      component: home,
      children: [  //孩子
        {
          path: '/container',
          name: 'container',
          component: container
        },
        {
          path: '/history',
          name: 'history',
          component: history,
        },
        {
          path: '/datachart',
          name: 'datachart',
          component: datachart,
        },
        {
          path: '/map',
          name: 'map',
          component: map,
        },
        {
          path: '/nodeadd',
          name: 'nodeadd',
          component: nodeadd,
        },

      ]
    },

    {
      path: '/train',
      name: 'train',
      component: train,
    },
  ]
})
