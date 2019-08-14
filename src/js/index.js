import MarkdownEditor from './MarkdownEditor';

import Marked from './Marked';

const install = (Vue) => {
    Vue.component(MarkdownEditor.name, MarkdownEditor);

    Vue.component(Marked.name, Marked);
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install);
}

export default install;
