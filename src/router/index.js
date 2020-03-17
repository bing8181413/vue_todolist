import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo1 from '../views/demo1-sass'
import TodoBox from '../views/todo-box'

Vue.use(VueRouter)

const routes = [
  // {path: '/',name:'demo1',component:Demo1},
  {path: '/',name:'TodoBox',component:TodoBox},
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
