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
            <a v-link="menu.state"><i class="fa fa-2x {{ menu.icon }}"></i><span>{{ $t(menu.name) }}</span></a>
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
        avatar: '../img/logo.png',
        name: 'Alice'
      },
      menus: this.menus,
      activeMenu: null
    }
  },
  methods: {
    switchMenu(menu) {
      this.activeMenu = menu;
    },
    switchLang(lang) {
      this.$lang.lang = lang;
    }
  },
  ready () {
    this.menus = [];
    this.$http.get(api.global.getMenu).then(response => {
        // success callback
        this.menus = response.json();
    }, response => {
        // error callback
    });

    this.activeMenu = this.menus[0];
  }
};
</script>
