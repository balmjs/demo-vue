import Vue from 'vue'
import Router from 'vue-router'
import App from './app'

import Dashboard from './admin/dashboard'
import User from './admin/user'
import UserList from './admin/user-list'
import UserDetail from './admin/user-detail'

Vue.use(Router)

let router = new Router()

router.map({
  '/login': {
    component: Dashboard
  },
  '/dashboard': {
    component: Dashboard
  },
  '/user': {
    name: 'user',
    component: User,
    subRoutes: {
      '/': {
        name: 'user.list',
        component: UserList
      },
      '/detail/:id': {
        name: 'user.detail',
        component: UserDetail
      }
    }
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.afterEach(function (transition) {
  console.log(transition.to)
})

router.alias({
  '/': '/login'
})

router.start(App, '#app')
