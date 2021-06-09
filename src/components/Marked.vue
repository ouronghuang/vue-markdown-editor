<template>
  <div
      :class="$options.name"
      :id="id"
  >
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'vue-marked',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      marked: null
    }
  },
  computed: {
    id() {
      return `${this.$options.name}-${this._.uid}`;
    }
  },
  watch: {
    value: {
      handler() {
        this.highlightBlock();
      }
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
});
</script>
