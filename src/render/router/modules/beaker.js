// router/modules/beaker.js

import Layout from '@/components/layout/index.vue'

export default {
  path: '/beaker',
  name: 'beaker',
  component: Layout,
  sort: 1,
  children: [
    {
      path: 'window',
      name: 'window',
      meta: {
        title: 'window'
      },
      component: () => import('@/views/beaker/window/index.vue')
    },
    {
      path: 'screenshot',
      name: 'screenshot',
      meta: {
        title: 'screenshot'
      },
      component: () => import('@/views/beaker/screenshot/index.vue')
    },
    {
      path: 'online',
      name: 'online',
      meta: {
        title: 'online'
      },
      component: () => import('@/views/beaker/online/index.vue')
    },
    {
      path: 'notification',
      name: 'notification',
      meta: {
        title: 'notification'
      },
      component: () => import('@/views/beaker/notification/index.vue')
    },
    {
      path: 'clipboard',
      name: 'clipboard',
      meta: {
        title: 'clipboard'
      },
      component: () => import('@/views/beaker/clipboard/index.vue')
    },
    {
      path: 'dialog',
      name: 'dialog',
      meta: {
        title: 'dialog'
      },
      component: () => import('@/views/beaker/dialog/index.vue')
    },
  ]
}
