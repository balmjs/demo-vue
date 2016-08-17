<template>
  <div>
    用户列表
    <ul>
      <li v-for="user in users">
        <a v-link="user.url">{{user.name}}</a>
        <i class="fa fa-edit" @click="onEdit($index)"></i>
        <i class="fa fa-remove" @click="onDelete($index)"></i>
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
