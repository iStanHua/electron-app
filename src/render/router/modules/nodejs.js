// router/modules/nodejs.js

import Layout from '@/components/layout/index.vue'

export default {
  path: '/nodejs',
  name: 'nodejs',
  component: Layout,
  sort: 2,
  children: [
    {
      path: 'notifier',
      name: 'notifier',
      meta: {
        title: 'notifier'
      },
      component: () => import('@/views/nodejs/notifier/index.vue')
    },
    {
      path: 'gif',
      name: 'gif',
      meta: {
        title: 'gif'
      },
      component: () => import('@/views/nodejs/gif/index.vue')
    },
    {
      path: 'ico',
      name: 'ico',
      meta: {
        title: 'ico'
      },
      component: () => import('@/views/nodejs/ico/index.vue')
    },
    {
      path: 'tesseract',
      name: 'tesseract',
      meta: {
        title: 'tesseract'
      },
      component: () => import('@/views/nodejs/tesseract/index.vue')
    },
  ]
}
