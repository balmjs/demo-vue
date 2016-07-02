import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import App from './app'

Vue.use(VueRouter)
Vue.use(VueI18n)

// ready translated locales
import { locales } from './config/lang'

// set lang
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach(lang => {
  Vue.locale(lang, locales[lang])
})

let router = new VueRouter({
  hashbang: false
})

router.map({
  '/login': {
    component: resolve => {
      require(['./admin/dashboard'], resolve)
    }
  },
  '/dashboard': {
    component: resolve => {
      require(['./admin/dashboard'], resolve)
    }
  },
  '/user': {
    name: 'user',
    component: resolve => {
      require(['./admin/user'], resolve)
    },
    subRoutes: {
      '/': {
        name: 'user.list',
        component: resolve => {
          require(['./admin/user-list'], resolve)
        }
      },
      '/detail/:id': {
        name: 'user.detail',
        component: resolve => {
          require(['./admin/user-detail'], resolve)
        }
      }
    }
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.afterEach(transition => {
  console.log(transition.to)
})

router.alias({
  '/': '/login'
})

router.start(App, '#app')
