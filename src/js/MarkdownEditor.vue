<template>
  <textarea
    :id="id"
    :name="name"
  >
  </textarea>
</template>

<script>
import SimpleMDE from 'simplemde';

export default {
  name: 'vue-markdown-editor',
  props: {
    value: {
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
  computed: {
    id() {
      return `${this.$options.name}-${this._uid}`;
    }
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    const options = {
      ...this.options,
      element: document.getElementById(this.id)
    };

    this.editor = new SimpleMDE(options);
    this.editor.value(this.value);
    this.editor.codemirror.on('change', () => {
      this.$emit('input', this.editor.value());
    });
  }
}
</script>
