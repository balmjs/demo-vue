<template>
  <div class="clipboard">
    <div class="clipboard-target" v-if="hasInput">
      <slot name="input">
        <input type="text" class="txt" :value="label" readonly>
      </slot>
    </div>
    <div class="clipboard-trigger" :aria-label="label" :data-copied-hint="copiedHint" @click="copyToClipboard">
      <slot>
        <button type="button" class="btn">复制到剪贴板</button>
      </slot>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

/**
 * 剪贴板组件
 *
 * 用法
 * <clipboard :target="yourContent" :toast="toastMessage" @copied="copied"></clipboard>
 *
 * 参数
 * target:String 需要复制的内容
 * toast:Function 成功后的提示
 * hasInput:Boolean 是否显示文本框
 *
 * 返回
 * copied 成功后父组件中的回调方法
 */
export default {
  props: {
    target: {
      type: String,
      default: 'Copy to clipboard',
      required: true
    },
    toast: {
      type: Function,
      default: () => {}
    },
    hasInput: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      clipboard: null,
      label: this.target,
      copiedHint: 'Copied!'
    }
  },
  watch: {
    target: function(val) {
      this.label = val;
    }
  },
  methods: {
    copyToClipboard() {
      this.clipboard.text = trigger => {
        return trigger.getAttribute('aria-label');
      };
    }
  },
  mounted() {
    this.clipboard = new Clipboard('.clipboard-trigger');

    this.clipboard.on('success', e => {
      // console.log(e);

      e.clearSelection();
      // short toast message
      this.toast();
      // callback
      this.$emit('copied');
    });

    this.clipboard.on('error', e => {
      console.log(e);
    });
  },
  destroyed() {
    this.clipboard.destroy();
  }
};
</script>

<style scoped>
.clipboard {
  display: table;
}

.clipboard-target,
.clipboard-trigger {
  display: table-cell;
}
</style>
