
const gulp = require("gulp");

// const uglify = require("gulp-uglify")

//引入合并js文件插件
// const concat = require("gulp-concat")

//引入合并/压缩/崇明js文件
// const rename = require("gulp-rename")

//引入css压缩插件
const sass = require("gulp-sass")

//引入sass插件
// const sass = require("gulp-connect");

//引入简易服务器插件
// const connect = require("gulp-connect");




//这是gulp要完成的任务
//定义一个复制任务
// gulp.task('copyallfile', async ()=>{
//     //把当前目录下的所有文件拷贝至目录：D:\\phpStudy\\WWW\\mycasio下；
//     gulp.src('*/**/*')
//     .pipe(gulp.dest("D:\\phpStudy\\WWW\\mycasio"));
// })

//定义一个监听器，监听文件是否有改变，如果有改变就自动改变
gulp.task("watchall", async ()=>{
    gulp.watch("*.html", async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\mycasio"));
    }); 

    gulp.watch("php/*.php", async ()=>{
        gulp.src("php/*.php")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\mycasio\\php"));
    }); 

    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        // .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\mycasio\\js"));
    });

    // gulp.watch(["js/index.js","js/goods.js"],async ()=>{
    //     gulp.src(["js/index.js","js/goods.js"])
    //     .pipe(concat("commons.js"))
    //     .pipe(uglify())
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\mycasio\\js"));
    // })

    // gulp.watch(["js/index.js","js/goods.js"],async ()=>{
    //     gulp.src(["js/index.js","js/goods.js"])
    //     .pipe(concat("commons.js"))
    //     .pipe(uglify())
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\mycasio\\js"))
    //     .pipe(rename("commons.min.js"))
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\mycasio\\js"));
    // })

    gulp.watch("css/*.css", async ()=>{
        gulp.src("css/*.css")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\mycasio\\css"));
    })

    // gulp.task("sass", async ()=>{
    //     gulp.src("sass/**/*.scss")
    //     .pipe(sass())
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\mycasio\\css"));
    // })

});
