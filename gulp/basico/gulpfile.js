const gulp = require('gulp')

gulp.task('default', () =>{
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], ()=>{
     gulp.src('pastaA/**/*.txt')
     // aqui vai criar a pasta b e colocar os arquivos 1 e 2
       .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () =>{
    console.log('Antes1!!!')
})


gulp.task('antes2', () =>{
    console.log('Antes2!!!')
})


gulp.task('fim', () =>{
    console.log('Fim!!!')
})

// ao chamar a task fim, o sistema chama a task fim1 e fim2
gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () =>{

})

gulp.task('fim2', () =>{

})