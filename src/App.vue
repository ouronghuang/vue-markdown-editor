<template>
  <h2 class="text-primary">
    编辑器：
  </h2>
  <vue-markdown-editor v-model="content"/>
  <h2 class="text-primary">
    渲染器：
  </h2>
  <vue-marked
      :value="content"
      @rendered="handleRendered"
  />
  <h2 class="text-primary">
    渲染器事件：
  </h2>
  <div>
    {{ renderedContent }}
  </div>
  <h2 class="text-primary">
    渲染器事件输出原样 HTML：
  </h2>
  <div v-html="renderedContent"/>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      content: '## Vue markdown editor and marked\n\n```html\n  <vue-markdown-editor v-model="content"></vue-markdown-editor>\n  <vue-marked :value="content" @rendered="handleRendered"></vue-marked>\n```',
      renderedContent: ''
    }
  },
  methods: {
    handleRendered(val) {
      this.renderedContent = val;
    }
  }
}
</script>

<style>
.text-primary {
  color: #3eaf7c;
}
</style>
