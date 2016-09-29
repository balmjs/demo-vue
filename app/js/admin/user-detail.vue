<template>
  <div>
    用户详情<br>
    用户ID：{{userId}}
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
