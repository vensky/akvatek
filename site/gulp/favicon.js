const { dest, src } = require('gulp');
const multipipe = require('multipipe');

module.exports = function favicon() {
    return multipipe(
        src('src/*.{png,svg,json,ico}'),
        dest('build/')
    );
};
