<template>
    <div class="vue-marked" :id="editorId"></div>
</template>

<script>
    import marked from 'marked';
    import hljs from 'highlight.js'

    export default {
        name: 'vue-marked',
        props: {
            value: {
                type: String,
                default: '',
            },
        },
        computed: {
            editorId() {
                return `vue-marked-${this._uid}`
            }
        },
        watch: {
            value: {
                handler(value) {
                    this.highlightBlock(value);
                },
            }
        },
        data() {
            return {
                marked: null,
            }
        },
        mounted() {
            this.marked = document.getElementById(this.editorId);

            this.highlightBlock(this.value);
        },
        methods: {
            highlightBlock(value) {
                this.marked.innerHTML = marked(value);

                let blocks = this.marked.querySelectorAll('pre code');

                blocks.forEach((block) => {
                    hljs.highlightBlock(block)
                })
            },
        },
    }
</script>
