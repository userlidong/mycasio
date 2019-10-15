
    // 电话号码
	var oTel=document.getElementById("tName");
	var oTiti=document.getElementById("titie");
oTel.onblur=function(){  //光标离开判断输入是否正确
   
	var flagTel=false;
	var regName=/^1\d{10}$/;  //手机号： 15  13  18 
	if(regName.test(oTel.value)){
		flagTel=true;   
		oTiti.innerHTML="";
	}else{
		flagTel=false;
		oTiti.innerHTML="输入有误请重新输入";
	}
}

//验证码
var _yCode=document.getElementById("checkpass");
var _sCode=document.getElementById("sCode");
var _oa=document.getElementById("but");
var flag_yCode=false;
var oYw=document.getElementById("sha");
_oa.onclick= function() {
	var str="";
	for(var i=0;i<4;i++){
		var num = parseInt(Math.random()*150);   //
		if((num>=48 && num<=57)){
			str += String.fromCharCode(num);
		}else{
			i--;
		}
	}
	_sCode.innerHTML=str;
	_sCode.style.color= bg2();
}
// 验证码是否一致
_yCode.onblur=function(){  //光标离开判断输入是否正确
	if(_sCode.innerHTML==_yCode.value){
		flag_yCode=true;   
		oYw.innerHTML="";
	}else{
		flag_yCode=false;
		oYw.innerHTML="验证码输入不一致";
	}
}
// 随机函数
	function bg2(){
		 return '#'+Math.floor(Math.random()*0xffffff).toString(16);
	 }

	 //密码
var oPwd=document.getElementById("tPwd");
var oTip1=document.getElementById("tip1");
var flagPwd=false;
oPwd.onblur=function(){  //光标离开判断输入是否正确
	var regName=/^.{6,18}$/;  //两位数
	if(regName.test(oPwd.value)){
		flagPwd=true;   
			var num=/^\d+$/;//纯数字
			var word=/^[a-zA-Z]+$/;//纯字母
			var Char=/^[!@$%#]+$/;//纯特殊字符
			
			var _num=/\d+/;//包含数字
			var _word=/[a-zA-Z]+/;//包含字母
			var _Char=/[!@$%#]+/;//包含特殊字符
			var str=oPwd.value;
			if(num.test(str)||word.test(str)||Char.test(str)){
				oTip1.innerHTML="密码等级弱";
			}else if(_num.test(str)&&_word.test(str)&&_Char.test(str)){
				oTip1.innerHTML="密码等级强";
			}else{
			oTip1.innerHTML="密码等级中";
			}
		}else{
			flagPwd=false;
			oTip1.innerHTML="";
		}
}

    $("#idD").click(function(){
	var agree = document.getElementById("Agree").checked
		if(!agree){  
			alert("请同意用户协议")
		}else if(oTiti.innerHTML!=""){//电话号码
			alert("请输入正确电话号码")
		}else if(oYw.innerHTML!=""){
			alert("请输入正确验证码")
		}else if(oTip1.innerHTML==""){
			alert("请输入6位以上密码")
		}else{

		let xhr = new XMLHttpRequest();

		xhr.open("post","php/zhuce.php",true);

		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="-1"){
					alert("该号码已被注册")
				}else if(xhr.responseText=="0"){
					alert("注册失败")
				}else if(xhr.responseText=="1"){
					alert("注册成功");
					location='index.html';
				}
			}
		}
		//post方式：设置请求头
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//post方式：把传给服务器端数据（键值对）放在send函数的参数里
		let sendstr = `phonenum=${$("#tName")[0].value}&pass=${$("#tPwd")[0].value}`;
		xhr.send(sendstr);
		}
});