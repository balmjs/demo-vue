<template>
  <div class="flexbox-child content">
    <hello></hello>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './hello';

export default {
  components: {
    Hello
  }
};
</script>
