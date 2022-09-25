const { dest, src } = require('gulp');
const multipipe = require('multipipe');
const rename = require('gulp-rename');
const include = require('gulp-file-include');

const eslint = require('gulp-eslint');
const sourcemaps = require('gulp-sourcemaps');

module.exports = function script(env = 'dev', version) {
    switch (env) {
        case 'dev':
            return multipipe(
                src('src/js/app.js'),
                include(),
                sourcemaps.init(),
                sourcemaps.write(),
                rename('scripts.js'),
                dest('src/js/')
            );
            break;
        case 'test':
            return multipipe(
                src(['src/js/_components/**/*.js', '!src/js/_components/_swiper.js']),
                eslint(),
                eslint.format()
            );
            break;
        case 'build':
            return multipipe(
                src('src/js/app.js'),
                include(),
                // rename(`scripts.v${version}.js`),
                rename(`scripts.js`),
                dest('build/js')
            );
            break;
    }
}