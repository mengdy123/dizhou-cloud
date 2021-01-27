import Vue from 'vue'
import Router from 'vue-router'
import mainLayout from '../components/layout/main.vue'
// import { resolve } from 'core-js/fn/promise'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => {
        require(['../views/login'], resolve)
      }
    },
    {
      path: '/mianIndex',
      name: 'mianIndex',
      component: mainLayout,
      children: [{
        path: '/',
        title: '首页',
        component: resolve => {
          require(['../views/home'], resolve)
        }
      }]
    }
  ]
})
