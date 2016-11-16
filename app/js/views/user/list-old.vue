<template>
  <div class="user-list">
    <h3>User list</h3>
    <ul>
      <li v-for="(user, index) in users">
        <router-link :to="'/user/detail/' + user.id">{{user.name}}</router-link>
        <i class="fa fa-edit" @click="onEdit(index)">Edit</i>
        <i class="fa fa-remove" @click="onDelete(index)">Delete</i>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../../config/api';
import state from '../../store/state';

export default {
  data() {
    return {
      curIndex: -1,
      curData: {},
      users: this.users
    }
  },
  methods: {
    setState() {
      state.users = this.users;
    },
    onEdit(index) {
      this.curIndex = index;
      this.curData = this.users[index];
      // after save
      this.users[index].name = this.curData.name + ' updated';
      this.setState();
    },
    onDelete(index) {
      // after confirm
      this.users.splice(index, 1);
      this.setState();
    }
  },
  async created() {
    if (!state.users.length) {
      let response = await this.$http.get(api.user.getList);
      state.users = response.data;
    }
    this.users = state.users;
  }
};
</script>
