import Vue from 'vue'
import Router from 'vue-router'

import home from './views/home.vue'
import test from './views/test.vue'
import fortune from './views/fortune.vue'

import heros from './views/heros/heros.vue'
import addHero from './views/heros/addHero.vue'
import editHero from './views/heros/editHero.vue'

import craftList from './views/craft/craftList.vue'
import addCraft from './views/craft/addCraft.vue'
import editCraft from './views/craft/editCraft.vue'



Vue.use(Router)

/**
 * 上线版本，部分页面不暴露
 */

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
      // name: 'home',
      // component: home
      name: 'fortune',
      component: fortune
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/fortune',
      name: 'fortune',
      component: fortune
    },
    {
      path: '/heros',
      name: 'heros',
      component: heros
    },
    // {
    //   path: '/addHero',
    //   name: 'addHero',
    //   component: addHero
    // },
    // {
    //   path: '/editHero',
    //   name: 'editHero',
    //   component: editHero
    // },
    // {
    //   path: '/editHero/:id',
    //   name: 'editHero',
    //   // props: true,  //如果 props 被设置为 true，route.params 将会被设置为组件属性。
    //   component: editHero
    // },
    {
      path: '/craftList',
      name: 'craftList',
      component: craftList
    },
    // {
    //   path: '/addCraft',
    //   name: 'addCraft',
    //   component: addCraft
    // },
    // {
    //   path: '/editCraft',
    //   name: 'editCraft',
    //   component: editCraft
    // },
  ]
})
