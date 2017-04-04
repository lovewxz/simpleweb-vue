import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import project from '@/pages/project'
import map from '@/pages/map'
import experts from '@/pages/experts'
import article from '@/pages/article'
import notFound from '@/pages/notFound'
import caselist from '@/pages/caselist'

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
    },
    {
      path: '/experts/:id',
      name: 'article',
      component: article
    },
    {
      path: '/case',
      name: 'case',
      component: caselist
    },
    {
      path: '*',
      component: notFound
    }
  ]
})
