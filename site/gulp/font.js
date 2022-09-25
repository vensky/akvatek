const { dest, src } = require('gulp');
const multipipe = require('multipipe');

module.exports = function fonts() {
    return multipipe(
        src('src/fonts/*.{woff,woff2}'),
        dest('build/fonts')
    );
};
