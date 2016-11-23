<template>
  <div class="test">
    <clipboard :target="content" :toast="toast" @copied="copied" hasInput>
      <button type="button">自定义按钮/图标</button>
    </clipboard>
  </div>
</template>

<script>
import Clipboard from '../components/clipboard';

export default {
  components: {
    Clipboard
  },
  data() {
    return {
      content: 'http://balmjs.com',
      toast: () => {
        console.log('复制成功');
      }
    }
  },
  methods: {
    copied() {
      console.log('复制并回调成功');
    }
  }
}
</script>
