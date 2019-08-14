let mix = require('laravel-mix');

mix.sass('src/sass/index.scss', 'dist/css')
    .js('src/js/index.js', 'dist/js')
    .setPublicPath('dist')
    .options({
        processCssUrls: false
    });
