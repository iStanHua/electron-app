// router/modules/beaker.js

import Layout from '@/components/layout/index.vue'

export default {
  path: '/beaker',
  name: 'beaker',
  component: Layout,
  sort: 2,
  children: [
    {
      path: 'input',
      name: 'input',
      meta: {
        title: 'input'
      },
      component: () => import('@/views/beaker/input/index.vue')
    }
  ]
}
