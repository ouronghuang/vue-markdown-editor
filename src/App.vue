<template>
  <vue-markdown-editor v-model="content"></vue-markdown-editor>
  <vue-marked :value="content"></vue-marked>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      content: '## Vue markdown editor and marked\n\n```html\n  <vue-markdown-editor v-model="content"></vue-markdown-editor>\n  <vue-marked :value="content"></vue-marked>\n```'
    }
  }
}
</script>
