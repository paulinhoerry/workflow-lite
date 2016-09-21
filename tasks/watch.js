module.exports = function (gulp, plugins, config) {
    // Watch Task
    gulp.task('watch', function () {
        // Watch CSS
        plugins.watch(config.sourceCss, function () {
            gulp.start('css');
        });

        // Watch Pug
        plugins.watch(config.sourceHtml, function () {
            gulp.start('html');
        });

        // Watch Icons
        plugins.watch(config.sourceIcons, function () {
            gulp.start('icons');
        });

        // Watch SVG
        plugins.watch(config.sourceSvg, function () {
            gulp.start('svg');
        });

        // Watch Image
        plugins.watch(config.sourceImg, function () {
            gulp.start('images');
        });

        // Watch JS
        plugins.watch(config.sourceHtml, function () {
            gulp.start('js');
        });
    });
};