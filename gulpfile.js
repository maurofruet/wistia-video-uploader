var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var cssnano = require("gulp-cssnano");
var del = require("del");
var runSequence = require("run-sequence");

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "."
    }
  });
});

gulp.task("start", ["browserSync"], function() {
  gulp.watch("**/*.html", browserSync.reload);
  gulp.watch("src/**/*.css", browserSync.reload);
  gulp.watch("src/**/*.js", browserSync.reload);
});

gulp.task("useref", function() {
  return gulp
    .src("index.html")
    .pipe(useref())
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulpIf("*.css", cssnano()))
    .pipe(gulp.dest("dist"));
});

gulp.task("copy-html", function() {
  gulp.src("src/**/*.html").pipe(gulp.dest("dist/src"));
});

gulp.task("build", function(callback) {
  runSequence("clean:dist", ["useref", "copy-html"], callback);
});

gulp.task("clean:dist", function() {
  return del.sync("dist");
});
