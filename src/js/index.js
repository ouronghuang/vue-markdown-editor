import MarkdownEditor from './MarkdownEditor';

import Marked from './Marked';

const install = (Vue) => {
    Vue.component(MarkdownEditor.name, MarkdownEditor);

    Vue.component(Marked.name, Marked);
};

// Auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install,
    MarkdownEditor,
    Marked
};

export default {
    install
};
