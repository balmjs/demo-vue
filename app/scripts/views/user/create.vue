<template>
  <div class="user-create">
    <h3>Create a new user</h3>
    <p><input type="text" v-model.trim="name" @keyup.enter="onCreate"></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: ''
    };
  },
  methods: {
    ...mapActions([
      'addUser'
    ]),
    onCreate() {
      if (this.name) {
        let users = this.$store.state.users;
        // mock data
        let userId = users[users.length - 1].id + 1;
        // add
        this.addUser({
          id: +userId,
          name: this.name
        });
        // clear
        this.name = '';
        // back
        this.$router.push('/user/list');
      }
    }
  },
  created() {
    if (!this.$store.state.users.length) {
      this.$router.push('/user/list');
    }
  }
};
</script>
