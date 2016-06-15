<template>
  <nav class="flexbox-child navigation">
    <header class="profile">
      <figure>
        <img class="avatar" :src="user.avatar" :alt="user.name">
        <figcaption class="username">{{ $t("message.hello") }}, <span>{{ user.name }}</span>!</figcaption>
      </figure>
      <p><a href="#">设置</a> | <a href="#">退出</a></p>
    </header>
    <div class="menu">
      <ul>
        <li v-for="menu in menus" :class="{'active': menu==activeMenu}" @click="switchMenu(menu)">
            <a v-link="menu.state">{{menu.name}}</a>
        </li>
      </ul>
    </div>
    <footer class="lang">
      <a href="javascript:void(0)" @click="switchLang(lang[1]['key'])">{{ lang[1]['value'] }}</a> | <a href="javascript:void(0)" @click="switchLang(lang[0]['key'])">{{ lang[0]['value'] }}</a>
    </footer>
  </nav>
</template>

<script>
import { lang } from '../config/lang';

export default {
  data () {
    return {
      lang: lang,
      user: {
        avatar: '../img/logo.png',
        name: 'Alice'
      },
      menus: [
        {name: 'Dashboard', state: '/dashboard'},
        {name: 'UserList', state: '/user'}
      ],
      activeMenu: null
    }
  },
  methods: {
    switchMenu(menu) {
      this.activeMenu = menu
    },
    switchLang(lang) {
      this.$lang.lang = lang;
    }
  },
  ready () {
    this.activeMenu = this.menus[0]
  }
}
</script>
