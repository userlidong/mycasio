
// 轮播图
class BannerPlay {
    constructor(newBox,newOimg,newOli,btnPrevious,btnNext) { 
        this.index = 0; 
        this.box=newBox;
        this.oImg = newOimg;
        this.oLi = newOli;
        this.btnPrevious=btnPrevious;
        this.btnNext=btnNext;
        this.oLi.eq(this.index).css("font-weight","800");
    }

    //点击下一个按钮
    nextImage() {
        this.index++; 
        if (this.index == this.oLi.length) { 
            this.index = 0;
        }
        //设置div的图片
        this.oImg.eq(this.index).fadeIn(1000).siblings().fadeOut(1000);
        //设置li此时背景颜色的状态
        this.oLi.eq(this.index).css("font-weight","800").siblings().css("font-weight","100"); 
    }

    //点击上一个按钮
    previousImage() {
        this.index--; 
        if (this.index == -1) {
            this.index = this.oLi.length-1;
        }

        this.oImg.eq(this.index).fadeIn(1000).siblings().fadeOut(1000); 
        this.oLi.eq(this.index).css("font-weight","800").siblings().css("font-weight","100"); 
    }

    //自动播放
    autoplay(){
        let time = null;
        window.clearInterval(this.time);//根据定时器编号，找到定时器对象，进行清除
        this.time = setInterval(()=>{
            console.log(this.index);
            this.index++; 
            if (this.index == this.oLi.length) { 
                this.index = 0;
            }
            
            this.oImg.eq(this.index).fadeIn(1000).siblings().fadeOut(1000); 
            this.oLi.eq(this.index).css("font-weight","800").siblings().css("font-weight","100"); 
        },2000)
    }

    //停止自动播放
    stopPlay(){
        window.clearInterval(this.time);//根据定时器编号，找到定时器对象，进行清除
        this.time = null;//把定时器编号清除
    }
    
    //添加li的事件绑定
    eventBindLi(){
        for(let i=0;i<this.oLi.length;i++){
            this.oLi.eq(i).click(()=>{
                this.index = i;
                this.oImg.eq(this.index).fadeIn(1000).siblings().fadeOut(1000);
                this.oLi.eq(this.index).css("font-weight","800").siblings().css("font-weight","100");
            })
        }
    }

    //进行按钮的事件绑定
    eventBindBtn() {
        this.btnPrevious.click(()=> {
            this.previousImage(); //执行上一个按钮的方法
        })
        
        this.btnNext.click(()=> {
            this.nextImage(); //执行下一个按钮的方法
        })
            
        this.autoplay();//自动播放
        
        this.eventBindLi();//li的事件绑定
        
        //鼠标放在轮播图上会停止
        this.box.mouseover(()=> {
            this.stopPlay();
        })

        //鼠标离开轮播图会继续播放
        this.box.mouseout(()=> {
            this.autoplay();
        })
    }
}


 //导航栏下拉列表
 window.onload=function(){
    let oA=document.getElementsByClassName("logoLi");
    let oList=document.getElementsByClassName("listOne");
        for(let i=0;i<oA.length-1;i++){
            oA[i].onmousemove=function(){
                oList[i].style.display="block"; 
            }
            oA[i].onmouseout=function(){
                oList[i].style.display="none";
            }
                oList[i].onmousemove=function(){
                    oList[i].style.display="block";
                }
                oList[i].onmouseout=function(){
                    oList[i].style.display="none";
                }
            }  
        }
        
//   单独小下拉菜单
$("#logLas").mouseenter(function() {
         $("#uls").fadeIn(0);
    });
    $("#logLas").mouseleave(function() {
         $("#uls").fadeOut(0);
    });
    $("#uls").mouseenter(function() {
         $("#uls").fadeIn(0);
    });
    $("#uls").mouseleave(function() {
         $("#uls").fadeOut(0);
    });

$(window).scroll(function(){
    // 右侧的固定条
    if($(window).scrollTop() >0){
        $(".toolbars").css("display","block"); 
        } else{
            $(".toolbars").css("display","none"); 
        }
    });

    // 导航栏固定
    $(function(){
        let headTop = $(".header").height();
        let twoTop = $("#lodoo").height();
        // 给浏览器窗口监听滚动事件
        $(window).scroll(function(){
            let docScroll = $(document).scrollTop();
            if(docScroll>=headTop){
                $('#lodoo').css({
                    'position':'fixed',
                    'top':'0'
                });
                $(".listOne").css({
                    'margin-top':'-40px', 
                })
            }else{
                $('#lodoo').css({
                    'position':'static',
                })
                $(".listOne").css({
                    'margin-top':'0',
                })
            }
        })
    })

    // 豆豆文字
    // let oLi = document.getElementsByClassName("oLi")
    //     for(let i=0;i<oLi.length;i++){
    //         if(i=4){
    //             $(.oLi).css("padding-right","500px")
    //         }
    //     }

