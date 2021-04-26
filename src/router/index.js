import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dash from '@/components/Dash'
import Usuarios from '@/components/Usuarios'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { layout: "default" }
    },
    {
        path: '/',
        name: 'Principal',
        component: Dash
    },
    {
        path: '/dash',
        name: 'Principal',
        component: Dash
    },
    {
        path: '/usuarios',
        name: 'Usuários',
        component: Usuarios
    }
  ]
})