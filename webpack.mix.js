let mix = require('laravel-mix');

mix.js('src/js/vue-markdown-editor.js', 'dist/js')
   .sass('src/sass/vue-markdown-editor.scss', 'dist/css')
   .copyDirectory('node_modules/highlight.js/styles', 'dist/css/themes')
   .setPublicPath('dist')
   .webpackConfig({
     output: {
       libraryTarget: 'umd',
       umdNamedDefine: true
     }
   })
   .version()
   .disableNotifications();
