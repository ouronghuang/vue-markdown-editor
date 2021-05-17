import Marked from './components/Marked';
import MarkdownEditor from './components/MarkdownEditor';

export default {
  install: app => {
    app.component(Marked.name, Marked);
    app.component(MarkdownEditor.name, MarkdownEditor);
  }
}
