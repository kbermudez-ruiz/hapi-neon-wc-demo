'use strict';

const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const tslint = require('gulp-tslint');
const mocha = require('gulp-mocha');
const shell = require('gulp-shell');
const env = require('gulp-env');

/**
 * Remove build directory.
 */
gulp.task('clean', function () {
  return gulp.src(outDir, {
      read: false
    })
    .pipe(rimraf());
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
  return gulp.src('src/**/*.ts')
    .pipe(tslint())
});
/**
 * move config folder
 */
gulp.task('tc-json-configs', (cb) => {
  return gulp.src("src/configs/*.json")
    .pipe(gulp.dest('./build/src/configs'));
});

/**
 * move config folder
 */
gulp.task('tc-json-configs-data', (cb) => {
  return gulp.src("src/configs/data/*")
    .pipe(gulp.dest('./build/src/configs/data'));
});

gulp.task('compile', shell.task([
  'npm run tsc-demo',
]))
/**
 * Watch for changes in TypeScript
 */
gulp.task('watch', shell.task([
  'npm run tsc-watch',
]))

/**
 * Build the project.
 */
gulp.task('build', ['tslint', 'compile', 'tc-json-configs', 'tc-json-configs-data'], () => {
  console.log('Building the project ...');
});


gulp.task('default', ['build']);