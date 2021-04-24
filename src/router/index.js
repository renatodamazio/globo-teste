import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dash from '@/components/Dash'
import Usuarios from '@/components/Usuarios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
        path: '/dash',
        name: 'Dash',
        component: Dash
    },
    {
        path: '/usuarios',
        name: 'Usuarios',
        component: Usuarios
    }
  ]
})