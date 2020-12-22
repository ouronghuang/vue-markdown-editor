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
      handler(value) {
        this.highlightBlock(value);
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
    this.highlightBlock(this.value);
  },
  methods: {
    highlightBlock(value) {
      this.marked.innerHTML = marked(value);
      const blocks = this.marked.querySelectorAll('pre code');
      blocks.forEach(block => {
        hljs.highlightBlock(block);
      })
    }
  }
}
</script>
