<template>
  <div class="container flexbox-parent">
    <navigation></navigation>
    <container></container>
  </div>
</template>

<script>
import Navigation from './views/layouts/navigation';
import Container from './views/layouts/container';

export default {
  components: {
    Navigation,
    Container
  }
};
</script>
