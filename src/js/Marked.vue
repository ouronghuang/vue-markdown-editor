<template>
  <div
    class="vue-marked"
    :id="id"
  >
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';

export default {
  name: 'vue-marked',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    id() {
      return `${this.$options.name}-${this._uid}`;
    }
  },
  watch: {
    value: {
      handler() {
        this.highlightBlock();
      }
    }
  },
  data() {
    return {
      marked: null
    }
  },
  mounted() {
    this.marked = document.getElementById(this.id);
    this.highlightBlock();
  },
  methods: {
    highlightBlock() {
      this.marked.innerHTML = marked(this.value);
      const blocks = this.marked.querySelectorAll('pre code');
      blocks.forEach(block => {
        hljs.highlightElement(block);
      });
      this.$emit('rendered', this.marked.innerHTML);
    }
  }
}
</script>
