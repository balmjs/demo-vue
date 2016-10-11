<template>
  <div class="user-detail">
    <h4>用户详情</h4>
    <p>用户ID：{{userId}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: 0
    }
  },
  created () {
    let userId = this.$route.params.id;
    this.userId = userId;
    console.log(this.userId);
  }
}
</script>
