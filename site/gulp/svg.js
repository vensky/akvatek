const { dest, src } = require('gulp');
const multipipe = require('multipipe');
const rename = require('gulp-rename');

const svgmin = require('gulp-svgmin');

module.exports = function svg() {
    return multipipe(
        src('src/assets/icons/*.svg'),
        svgmin({
            plugins: [{
                removeViewBox: false,
            }]
        }),
        dest('src/html/includes/_icons/')
    );
}
