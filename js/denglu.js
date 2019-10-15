//保存cookie（添加）
//参数：
// 键
// 值
// 有效期:(单位：多少天)
//
function addCookie(key,value,dayCount,path,domain){
    let d = new Date();
    d.setDate(d.getDate()+dayCount);

    //escape（）：编码
    let str =`${key}=${escape(value)};expires=${d.toGMTString()}`;
    if(path!=undefined){
        str+=`;path=${path}`;
    }
    
    if(domain!=undefined){
        str+=`;domain=${domain}`;
    }
    document.cookie = str;
}


//获取cookie（查询）根据键获取值
//参数：
// 键
//返回值：值（键对应的值）

function getCookie(key){  
    //document.cookie的示例： usernamet=hi; username=jzm; userpass=123
    var str = unescape(document.cookie);//unescape:解码
    //1、分割成数组
    let arr = str.split("; "); //arr=["usernamet=hi","username=jzm","userpass=123"];
    //2、循环arr，
    for(var i in arr){
        if(arr[i].startsWith(key+"=")){
            let [,value]=arr[i].split("=");//["username","jzm"]
            return value;
        }
    }
    return null;
}
//删除cookie:(cookie不能直接删除，可以通过设置过期时间为过去，进行删除)
//参数：
//键
//返回值：无
function removeCookie(key){//removeCookie("username");
    addCookie(key,"",-1);
}
//修改的话：就用增加，只要键相同，就会覆盖。
$("#nameden").click(function(){
    //1、
    let xhr = new XMLHttpRequest();
    xhr.open("post","php/denglu.php",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="1"){
                addCookie("username",$("#usernametwo").val(),7);
                location.href="index.html";
            }else{
                alert("密码或用户名错误")
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `phonenum=${$("#usernametwo")[0].value}&passnum=${$("#checkpasstwo")[0].value}`;
    xhr.send(sendstr);
});
