<template>
  <div>
    <h4>用户列表</h4>
    <ul>
      <li v-for="user in users">
        <a v-link="user.url">{{user.name}}</a>
        <i class="fa fa-edit" @click="onEdit($index)">编辑</i>
        <i class="fa fa-remove" @click="onDelete($index)">删除</i>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '../config/api';

export default {
  data () {
    return {
      curIndex: -1,
      curData: {},
      users: this.users
    }
  },
  async created () {
    this.users = [];

    let response = await this.$http.get(api.user.getList);
    this.users = response.body;
  },
  methods: {
    onEdit(index) {
      this.curIndex = index;
      this.curData = this.users[index];
      // after save
      this.users[index].name = this.curData.name + ' updated';
    },
    onDelete(index) {
      // after confirm
      this.users.splice(index, 1);
    }
  }
};
</script>
