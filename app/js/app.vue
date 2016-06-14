<template>
  <div class="flexbox-parent container">
    <navigation></navigation>
    <container></container>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'
import Container from './components/container.vue'

export default {
  components: {
    Navigation,
    Container
  }
}
</script>
