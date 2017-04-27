import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/components/HomePage/homePage'
import hello from '@/components/Hello'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    }
  ]
})
