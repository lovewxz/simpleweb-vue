import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import project from '@/pages/project'
import map from '@/pages/map'
import experts from '@/pages/experts'

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
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/experts',
      name: 'experts',
      component: experts
    }
  ]
})
