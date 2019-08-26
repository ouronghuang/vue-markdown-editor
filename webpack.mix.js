let mix = require('laravel-mix');

mix.js('src/js/index.js', 'dist/js')
    .sass('src/sass/index.scss', 'dist/css');

mix.webpackConfig({
    output: {
        libraryTarget: 'umd'
    },
});
