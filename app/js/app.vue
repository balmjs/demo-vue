<template>
  <div class="flexbox-parent container">
    <navigation></navigation>
    <container></container>
  </div>
</template>

<script>
import Navigation from './components/navigation'
import Container from './components/container'

export default {
  components: {
    Navigation,
    Container
  }
}
</script>
