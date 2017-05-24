const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const nodemon = require('gulp-nodemon');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('compile', () => {
  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['compile'], () => {
  return nodemon({
    script: 'bin/run',
    watch: 'src',
    tasks: ['compile'],
    ext: 'ts',
    env: {
      'NODE_ENV': 'development',
    },
    exec: 'node',
  });
});