const gulp = require('gulp')

gulp.task('monitorarMudancas', ()=>{
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.scss', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'))


})


gulp.task('servidor', ['monitorarMudancas'], ()=>{
     return gulp.src('build').pipe(webserver({
          livereload: true,
          port: 8080,
          open: true
     }))
})