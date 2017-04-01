import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import project from '@/pages/project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/project/:id',
      name: 'project',
      component: project
    }
  ]
})
