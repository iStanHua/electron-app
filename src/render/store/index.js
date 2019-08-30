import Vue from 'vue'
import Vuex from 'vuex'

import { routeContexts } from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    menuList: routeContexts().sort((a, b) => a.sort - b.sort)
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
