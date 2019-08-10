let mix = require('laravel-mix');

mix.sass('src/sass/vue-markdown-editor.scss', 'dist/css')
    .js('src/js/vue-markdown-editor.js', 'dist/js')
    .setPublicPath('dist')
    .options({
        processCssUrls: false
    });
