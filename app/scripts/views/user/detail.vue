<template>
  <div class="user-detail">
    <h4>User Detail</h4>
    <div v-if="user">
      <p>ID：{{ user.id }}</p>
      <p>Name: <input type="text" v-model.trim="user.name" @keyup.enter="onUpdate"></p>
    </div>
    <p class="no-data" v-else>No data</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions([
      'editUser'
    ]),
    onUpdate() {
      if (this.user.name) {
        let user = this.user;
        let name = this.user.name
        // update
        this.editUser({ user, name });
        // back
        this.$router.push('/user/list');
      }
    }
  },
  created() {
    let userId = this.$route.params.id;
    this.$store.dispatch('getUser', userId);

    if (!this.$store.state.currentUser) {
      this.$router.push('/user/list');
    }
  }
}
</script>
