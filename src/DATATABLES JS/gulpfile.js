'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('datatables.net-dt-js', function() {
    return gulp.src('node_modules/datatables.net-dt/js/dataTables.dataTables.min.js')
        .pipe(gulp.dest('dist/js/.'));
});
gulp.task('datatables.net-dt-css', function() {
    return gulp.src('node_modules/datatables.net-dt/css/jquery.dataTables.min.css')
        .pipe(gulp.dest('dist/css/.'));
});
gulp.task('datatables.net', function() {
    return gulp.src(['node_modules/datatables.net/js/jquery.dataTables.min.js'])
        .pipe(gulp.dest("dist/js/."))
});
gulp.task('datatables.net-bs5-css', function() {
    return gulp.src(['node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css'])
        .pipe(gulp.dest("dist/css/."))
});
gulp.task('datatables.net-bs5-js', function() {
    return gulp.src(['node_modules/datatables.net-bs5/js/dataTables.bootstrap5.min.js'])
        .pipe(gulp.dest("dist/js/."))
});
gulp.task('datatables.net-editor-bs5', function() {
    return gulp.src(['node_modules/datatables.net-editor-bs5/css/editor.bootstrap5.min.css'])
        .pipe(gulp.dest("dist/css/."))
});

gulp.task('default', gulp.series(['datatables.net-dt-js','datatables.net-dt-css','datatables.net','datatables.net-bs5-css','datatables.net-bs5-js','datatables.net-editor-bs5']));