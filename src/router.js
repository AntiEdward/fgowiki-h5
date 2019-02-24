import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import heros from './views/heros/heros.vue'
import addHeros from './views/heros/addHeros.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'addHeros',
      component: addHeros
    },
    {
      path: '/heros',
      name: 'heros',
      component: heros
    },
    {
      path: '/addHeros',
      name: 'addHeros',
      component: addHeros
    },
  ]
})
