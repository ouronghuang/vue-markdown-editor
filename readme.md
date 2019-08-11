## vue-markdown-editor

具备 markdown 编辑器和 markdown 文本解析显示功能

![](examples/images/1.png)

## 常规

```html
<link href="path/vue-markdown-editor.css" rel="stylesheet">

<script src="path/vue-markdown-editor.js"></script>
```

## NPM

1. 安装

```
yarn add vue-markdown-editor --dev
```

> 暂未上传到 NPM 上

2. 引入 js

```
import vueMarkdownEditor from 'vue-markdown-editor';

Vue.use(vueMarkdownEditor);
```

3. 引入样式

```
@import "~vue-markdown-editor";
```

## 使用编辑器

```
<vue-markdown-editor v-model="content"></vue-markdown-editor>
```

* 基于 [simplemde-markdown-editor](https://github.com/sparksuite/simplemde-markdown-editor)

* props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | markdown 文本，可以使用 v-model 双向绑定数据 | String | 空 |
| options | 可传入 simplemde-markdown-editor 的所有配置 | Object | {} |
| name | 表单 textarea 的 name 属性 | String | - |

## 使用解析器

```
<vue-marked :value="content"></vue-marked>
```

* 使用 [highlight.js](https://github.com/highlightjs/highlight.js) 的 atom-one-dark 主题

* props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | markdown 文本 | String | 空 |
