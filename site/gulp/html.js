const { dest, src } = require('gulp');
const multipipe = require('multipipe');
const plumber = require('gulp-plumber');

const bemValidator = require('gulp-html-bem-validator');
const hint = require('gulp-htmlhint');
const include = require('gulp-file-include');
const replace = require('gulp-html-replace');
const validator = require('gulp-w3c-html-validator');

const srcPath = 'src/html/views/*.html';

module.exports = function html(env = 'dev', version) {
    switch (env) {
        case 'dev':
            return multipipe(
                src(srcPath),
                plumber(),
                include({
                    context: {
                        build: false
                    }
                }),
                dest('src')
            );
            break;
        case 'test':
            return multipipe(
                src('src/*.html'),
                bemValidator(),
                validator(),
                hint(),
                hint.reporter()
            );
            break;
        case 'build':
            return multipipe(
                src(srcPath),
                include({
                    context: {
                        build: true
                    }
                }),
                // replace({
                //     css: `css/style.min-v${version}.css`,
                //     js: `js/scripts.min-v${version}.js`,
                // }),
                dest('build')
            );
            break;
    }
}