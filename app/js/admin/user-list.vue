<template>
  <div>
    用户列表
    <ul>
      <li v-for="user in userlist">
        <a v-link="getUrl(user.id)">{{user.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userlist: [
        {
          id: 1,
          name: '用户-甲'
        },
        {
          id: 2,
          name: '用户-乙'
        },
        {
          id: 3,
          name: '用户-丙'
        },
        {
          id: 4,
          name: '用户-丁'
        }
      ]
    }
  },
  methods: {
    getUrl (userId) {
      return '/user/detail/' + userId;
    }
  }
};
</script>
