  // 放大镜
	// 	1.移入时候mask和大块显示
// 	2.移出时候mask和大块隐藏
// 	3.mask跟随鼠标移动并且鼠标在mask中间
// 	4.大图跟随mask移动而移动
	// mask跟随鼠标位置=鼠标距左位置 - 小图距离左位置-mask宽度/2
	// 让mask块左和高的距离等于鼠标位置
	// 根据比例尺计算移动位置
	// 小框宽度:大框宽度=left:x    x为大图移动距离  x=left*大框/小框
	// 大图定位位置backgroundPositionX = -x
// 	5.mask边界问题
class magnifier{
	// 先设置三个变量
	constructor(newSmallBox,newMask,newBigBox) {
		this.smallBox=newSmallBox;
		this.mask=newMask;
		this.bigBox=newBigBox;
	}
	
	// 鼠标移入小图时显示
	over(){
		let that = this ; //要用this用上面区域的元素
		// 当鼠标移入小图区域时函数
		this.smallBox.onmouseover = function(){
			// 让mask和大图显示
			that.mask.style.display = "block";
			that.bigBox.style.display = "block";
		}
	}
	// 鼠标移出小图时隐藏
	out(){
		let that = this ;
		//当鼠标移出小图区域时函数
		this.smallBox.onmouseout=function(){
			// 让mask和大图隐藏
			that.mask.style.display = "none";
			that.bigBox.style.display = "none";
		}
	}
	
	move(){
		let that = this ;
		//当鼠标在小图区域移动时函数
		this.smallBox.onmousemove=function(evt){
			let e = evt || event;
			// mask跟随鼠标位置=鼠标距左位置 - 小图距离左位置
			let left =  e.pageX - that.smallBox.offsetLeft - that.mask.offsetWidth/2;
			// mask跟随鼠标位置在mask小块中间  - 小块宽度/2
			let top =  e.pageY - that.smallBox.offsetTop - that.mask.offsetHeight/2;
		
		//边界问题
		if(left < 0){  //左边界
			left = 0
		}
		
		let maxleft = that.smallBox.offsetWidth - that.mask.offsetWidth;
		if(left > maxleft){  //右边界
			left = maxleft;
		}
		
		if(top < 0){  //上边界
			top = 0
		}
		
		let maxtop = that.smallBox.offsetHeight - that.mask.offsetHeight;
		if(top > maxtop){  //下边界
			top = maxtop;
		}
		// 让mask块左和高的距离等于鼠标位置
		that.mask.style.left = left + "px";
		that.mask.style.top = top + "px";
		
		// 根据比例尺计算移动位置
		// 小框宽度:大框宽度=left:x    x为大图移动距离
		let x =that.bigBox.offsetWidth*left/that.mask.offsetWidth;
		let y =that.bigBox.offsetHeight*top/that.mask.offsetHeight;
		
		// 大图定位位置
		that.bigBox.style.backgroundPositionX= -x + "px";
		that.bigBox.style.backgroundPositionY = -y + "px";
		
		}
	}
}