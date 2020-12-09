import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signin from '../views/Signin.vue'
import Meal from '../views/Meal.vue'
import Food from '../views/Food.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/meal',
    name: 'Meal',
    component: Meal,
  },
  {
    path: '/food',
    name: 'Food',
    component: Food,
  }
]

const router = new VueRouter({
  routes
})

export default router
