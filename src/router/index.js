import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import myessey from '@/components/myessey'
import forme from '@/components/forme'
import otheressey from '@/components/otheressey'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component:home
    },
    {
      path:'/essey',
      name:'essey',
      component:myessey
    },
    {
      path:'/forme',
      name:'forme',
      component:forme
    },
    {
      path:'/otheressey',
      name:'otheressey',
      component:otheressey
    }
  ]
})
