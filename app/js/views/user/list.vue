<template>
  <div class="user-list">
    <h3>User list</h3>
    <p><router-link to="/user/create">Add new user</router-link></p>
    <table v-if="users.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>
            <router-link class="fa fa-edit" :to="'/user/detail/' + user.id">Detail</router-link>
            <i class="fa fa-remove" @click="onDelete(user)">Delete</i>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="no-data" v-else>No data</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      users: 'allUsers'
    })
  },
  methods: {
    ...mapActions([
      'deleteUser'
    ]),
    onDelete(user) {
      if (confirm(`确定删除 ${user.name}`)) {
        this.deleteUser(user);
      }
    }
  },
  created() {
    if (this.$store.state.users.length) {
      this.users = this.$store.state.users;
    } else {
      this.$store.dispatch('getAllUsers');
    }
  }
};
</script>
