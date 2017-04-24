<template>
  <nav class="navigation flexbox-child">
    <header class="profile">
      <figure>
        <img class="avatar" :src="user.avatar" :alt="user.name">
        <figcaption class="username">Hello, <span>{{ user.name }}</span>!</figcaption>
      </figure>
      <p><a href="#">Settings</a> | <router-link to="/logout">Exit</router-link></p>
    </header>
    <div class="menu">
      <ul>
        <li v-for="menu in menus" :class="{'active': menu==activeMenu}" @click="switchMenu(menu)">
          <router-link :to="menu.state">{{ menu.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import api from '../../config/api';

export default {
  data () {
    return {
      user: {
        avatar: require('../../../images/logo.png'),
        name: 'Alice'
      },
      menus: this.menus,
      activeMenu: null
    }
  },
  async created () {
    this.menus = [];

    let response = await this.$http.get(api.global.getMenu);
    this.menus = response.data;

    this.activeMenu = this.menus[0];
  },
  methods: {
    switchMenu(menu) {
      this.activeMenu = menu;
    }
  }
};
</script>
