import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/layout/index.vue'

import homePage from '@/views/index.vue'

Vue.use(Router)

export const routeContexts = () => {
  let contexts = require.context('./modules', true, /\.js$/)
  return contexts.keys().map(key => contexts(key).default)
}


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    ...routeContexts(),
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'index',
          meta: {
            title: '首页'
          },
          component: homePage
        },
        {
          path: '*',
          component: Layout,
          meta: {
            title: '404'
          },
          component: () => import('@/views/common/notFound.vue')
        }

      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router