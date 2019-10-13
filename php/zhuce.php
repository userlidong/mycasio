<?php
	header("Content-type:text/html;charset=utf-8");
	
	$name = $_POST["username"];
	// $pwd = $_POST["pass"];
	
	$conn = mysql_connect("localhost","root","root");
	
	if($conn){
		mysql_select_db("casio");
		 echo "成功";
	}
	
    $result = mysql_query("select * from zhuce where phone = '$name' ",$conn);
    
	if(mysql_num_rows($result) == 1){
		echo 1;
	}else{
		echo 0;
	}
	
	mysql_close($conn);
?>