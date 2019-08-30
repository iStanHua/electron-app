// router/modules/gear.js

import Layout from '@/components/layout/index.vue'

export default {
  path: '/gear',
  name: 'gear',
  component: Layout,
  sort: 1,
  children: [
    {
      path: 'window',
      name: 'window',
      meta: {
        title: 'window'
      },
      component: () => import('@/views/gear/window/index.vue')
    },
    {
      path: 'screenshot',
      name: 'screenshot',
      meta: {
        title: 'screenshot'
      },
      component: () => import('@/views/gear/screenshot/index.vue')
    },
  ]
}
