import { createApp } from 'vue';
import App from './App.vue';
import MarkdownEditor from './index';
import 'simplemde/dist/simplemde.min.css';
import 'highlight.js/styles/github.css';

createApp(App).use(MarkdownEditor).mount('#app')
