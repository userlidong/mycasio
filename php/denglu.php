<?php 
  
  if(empty($_POST['username']) || empty($_POST['password'])){
  	exit('请输入完整信息');
  }
 
  $username = $_POST['username'];
  $password = $_POST['password'];
 
  if($username === 'phone' && $password === 'pass'){
  	exit('登录成功');
  }
 
  exit('输入信息有误');
 ?>