import Vue from 'vue'
import VueRouter from 'vue-router'
import { getMiddleware, middlewarePipeline } from '@/middleware/config/middlewarePipeline'
import store from '@/store'

import auth from '@/middleware/auth'
import guest from '@/middleware/guest'
import userData from '@/middleware/config/userData'

import ProfileView from '@/views/ProfileView.vue'
import LoginPage from '@/views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      middleware: [guest]
    },
    component: LoginPage
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    redirect: '/profile'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const middleware = getMiddleware(to)
  if (!middleware) {
    return next()
  }
  userData(store)
  const context = {
    to,
    from,
    next,
    store
  }

  return middleware[0]({
    ...context,
    nextMiddleware: middlewarePipeline(context, middleware, 1)
  })
})

export default router
