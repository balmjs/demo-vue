<template>
  <nav class="flexbox-child navigation">
    <header class="profile">
      <figure>
        <img class="avatar" :src="user.avatar" :alt="user.name">
        <figcaption class="username">{{ $t('message.hello') }}, <span>{{ user.name }}</span>!</figcaption>
      </figure>
      <p><a href="#">{{ $t('message.settings') }}</a> | <a href="#">{{ $t('message.exit') }}</a></p>
    </header>
    <div class="menu">
      <ul>
        <li v-for="menu in menus" :class="{'active': menu==activeMenu}" @click="switchMenu(menu)">
            <a v-link="menu.state">{{ $t(menu.name) }}</a>
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
import api from '../config/api';

export default {
  data () {
    return {
      lang: lang,
      user: {
        avatar: require('assets/logo.png'),
        name: 'Alice'
      },
      menus: this.menus,
      activeMenu: null
    }
  },
  async created () {
    this.menus = [];

    let response = await this.$http.get(api.global.getMenu);
    this.menus = response.body;

    this.activeMenu = this.menus[0];
  },
  methods: {
    switchMenu(menu) {
      this.activeMenu = menu;
    },
    switchLang(lang) {
      this.$root.$lang.lang = lang;
    }
  }
};
</script>
