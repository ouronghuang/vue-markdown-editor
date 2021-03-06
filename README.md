<h1 align="center">
    Vue markdown editor and marked
</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/@orh/vue-markdown-editor">
        <img alt="npm" src="https://img.shields.io/npm/v/@orh/vue-markdown-editor?color=ea2039">
    </a>
    <a href="https://www.npmjs.com/package/@orh/vue-markdown-editor">
        <img alt="npm" src="https://img.shields.io/npm/dt/@orh/vue-markdown-editor?color=ea2039">
    </a>
    <a href="https://github.com/ouronghuang/vue-markdown-editor">
        <img alt="GitHub" src="https://img.shields.io/github/license/ouronghuang/vue-markdown-editor">
    </a>
</p>

* 适用于 Vue 2/3 的具备 markdown 编辑器和 marked 文本解析显示功能
* 基于 [simplemde-markdown-editor](https://github.com/sparksuite/simplemde-markdown-editor)
* 基于 [marked](https://github.com/markedjs/marked)
* 基于 [highlight.js](https://github.com/highlightjs/highlight.js)

![demo](./demo.jpg)

## Vue 3.x

1. 安装

```bash
$ yarn add @orh/vue-markdown-editor@4
```

2. 引入

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import MarkdownEditor from '@orh/vue-markdown-editor';
import 'simplemde/dist/simplemde.min.css';
import 'highlight.js/styles/<theme>.css';

createApp(App).use(MarkdownEditor).mount('#app')
```

3. 使用

[示例代码](./src/App.vue)

## Vue 2.x

1. 安装

```bash
$ yarn add @orh/vue-markdown-editor@3
```

2. 引入

```javascript
import Vue from 'vue';
import App from './App.vue';
import VueMarkdownEditor from '@orh/vue-markdown-editor';
import '@orh/vue-markdown-editor/dist/css/vue-markdown-editor.css';
import '@orh/vue-markdown-editor/dist/css/themes/<theme>.css';

Vue.use(VueMarkdownEditor);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 编辑器

```html
<vue-markdown-editor v-model="content"></vue-markdown-editor>
```

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | `markdown` 文本，可以使用 `v-model` 双向绑定数据 | `String` | 空 |
| `options` | 可传入 `simplemde-markdown-editor` 的所有配置 | `Object` | `{}` |
| `name` | 表单 `textarea` 的 `name` 属性 | `String` | - |

## 解析器

```html
<vue-marked :value="content" @rendered="handleRendered"></vue-marked>
```

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | `markdown` 文本 | `String` | 空 |

### Events

| 事件 | 说明 | 回调参数 |
| --- | --- | --- |
| `rendered` | `marked` 渲染完成后触发 | 渲染后的 `HTML` 代码 |

## 本地开发/预览

1. 安装依赖

```
$ yarn
```

2. 运行

```
$ yarn serve
```

## License

MIT
