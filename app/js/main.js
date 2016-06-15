import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import App from './app'

import Dashboard from './admin/dashboard'
import User from './admin/user'
import UserList from './admin/user-list'
import UserDetail from './admin/user-detail'

Vue.use(VueRouter)
Vue.use(VueI18n)

// ready translated locales
import { locales } from './config/lang'

// set lang
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

let router = new VueRouter()

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
