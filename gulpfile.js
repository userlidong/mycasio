const gulp = require("gulp");
const sass = require("gulp-sass");

// 监听任务
gulp.task("watchall",async ()=>{
    //定义一个监听器，监听文件是否有改变，如果有改变，则自动拷贝。
    gulp.watch("*.html",async ()=>{
        //把当前目录下的所有html文件拷贝至目录：dist
        gulp.src("*.html")
        .pipe(gulp.dest("d:\\phpstudy\\www\\mycasio1"));
    });

    // 监听sass文件
    gulp.watch("sass/**/*",async ()=>{
        //把当前目录下的所有html文件拷贝至目录
        gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("d:\\phpstudy\\www\\mycasio1\\css"));
    });
});