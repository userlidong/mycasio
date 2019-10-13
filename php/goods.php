<?php
     header("Content-type:text/html;charset=utf-8");
    //1、接收前端的数据
    $query = $_GET['query'];

    //2、查询数据库


    //响应：
    $str = "[";
    $str = $str.'{"id":"001","name":"海底捞火锅店","address":"南窑国际1","phone":"110","img":"img/02.jpg"},';
    $str = $str.'{"id":"002","name":"竹园村火锅店","address":"南窑国际2","phone":"120","img":"img/03.jpg"},';
    $str = $str.'{"id":"003","name":"小郡肝火锅店","address":"南窑国际3","phone":"119","img":"img/04.jpg"}';
    $str = $str.']';
    
    echo $str;

?>