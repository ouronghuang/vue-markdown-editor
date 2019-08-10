<template>
    <textarea :id="editorId" :name="name"></textarea>
</template>

<script>
    import SimpleMDE from 'simplemde';

    export default {
        name: 'vue-markdown-editor',
        props: {
            value: {
                type: String,
                default: '',
            },
            options: {
                type: Object,
                default: () => {
                    return {};
                }
            },
            name: String,
        },
        computed: {
            editorId() {
                return `vue-markdown-editor-${this._uid}`
            }
        },
        data() {
            return {
                editor: null,
            }
        },
        mounted() {
            let options = {
                ...this.options,
                element: document.getElementById(this.editorId),
            };

            this.editor = new SimpleMDE(options);

            this.editor.value(this.value);

            this.editor.codemirror.on('change', () => {
                this.$emit('input', this.editor.value());
            });
        }
    }
</script>
