<template>
  <div class="hello">
    <h1>
      Hello
      <a href="https://balmjs.com/">{{ msg }}</a> for Vue
    </h1>
    <p>A Flexible Front-End Workflow</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
}
a {
  color: orange;
}
</style>
