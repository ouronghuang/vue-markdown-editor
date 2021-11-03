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
    this.editor = new SimpleMDE({
      ...this.options,
      initialValue: this.value,
      element: document.getElementById(this.id)
    });
    this.editor.codemirror.on('change', (instance, changeObj) => {
      if (changeObj.origin === 'setValue') {
        return;
      }

      this.$emit('input', this.editor.value());
    });
  },
  methods: {
    updateEditorContent(content = null) {
      this.editor.value(content || this.value);
    }
  }
}
</script>
