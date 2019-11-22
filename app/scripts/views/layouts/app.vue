<template>
  <div class="flex-center full-height">
    <img alt="Vue logo" :src="logo" />
    <hello msg="BalmJS" />
  </div>
</template>

<script>
import Hello from '../components/hello';
import logo from '../../assets/logo.png';

export default {
  name: 'app',
  components: {
    Hello
  },
  data() {
    return {
      logo
    };
  }
};
</script>
