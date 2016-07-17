<template>
  <div>
    用户列表
    <ul>
      <li v-for="user in users">
        <a v-link="user.url">{{user.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../config/api';

export default {
  data () {
    return {
      users: this.users
    }
  },
  ready() {
    this.users = [];
    this.$http.get(api.user.getList).then(response => {
        // success callback
        this.users = response.json();
    }, response => {
        // error callback
    });
  }
};
</script>
