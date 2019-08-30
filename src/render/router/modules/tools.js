// router/modules/tools.js

import Layout from '@/components/layout/index.vue'

export default {
  path: '/tools',
  name: 'tools',
  component: Layout,
  sort: 3,
  children: [
    {
      path: 'input',
      name: 'input',
      meta: {
        title: 'input'
      },
      component: () => import('@/views/tools/input/index.vue')
    }
  ]
}
