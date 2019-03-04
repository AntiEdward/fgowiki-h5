import Vue from 'vue'
import Router from 'vue-router'
import test from './views/test.vue'
import heros from './views/heros/heros.vue'
import addHero from './views/heros/addHero.vue'
import editHero from './views/heros/editHero.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/',
      name: 'addHero',
      component: addHero
    },
    {
      path: '/heros',
      name: 'heros',
      component: heros
    },
    {
      path: '/addHero',
      name: 'addHero',
      component: addHero
    },
    {
      path: '/editHero',
      name: 'editHero',
      component: editHero
    },
  ]
})
