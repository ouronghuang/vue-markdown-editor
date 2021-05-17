<template>
  <div :class="$options.name">
    <textarea
        :id="id"
        :name="name"
    >
  </textarea>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde';

export default {
  name: 'vue-markdown-editor',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {
        return {};
      }
    },
    name: String
  },
  emits: ['update:modelValue'],
  data() {
    return {
      editor: null
    }
  },
  computed: {
    id() {
      return `${this.$options.name}-${this._.uid}`;
    }
  },
  mounted() {
    this.editor = new SimpleMDE({
      ...this.options,
      initialValue: this.modelValue,
      element: document.getElementById(this.id)
    });
    this.editor.codemirror.on('change', (instance, changeObj) => {
      if (changeObj.origin === 'setValue') {
        return;
      }

      this.$emit('update:modelValue', this.editor.value());
    });
  }
}
</script>
