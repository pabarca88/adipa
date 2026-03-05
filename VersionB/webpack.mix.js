const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .stylus('resources/stylus/app.styl', 'public/css/app.css')
    .options({
        processCssUrls: false,
    })
    .sourceMaps();

if (mix.inProduction()) {
    mix.version();
}
