<?php 
 session_start();
 
 if(isset($_SESSION["log"])){
 
     echo"isset!";
 
     header("location:b03.html");
 
     exit();
 
 }
 
 $uname=$_POST['帳號'];
 
 $pwd=$_POST['密碼'];
 
 if($uname!="kk"){
 
     header("location:login.html");
 
     exit();
 
 }
 
 if($pwd!="yy"){
 
     header("location:login.html");
 
     exit();
 
 }
 
 $_SESSION['log']='ok';
 
 echo"ok";
 
 header("location:b03.html");
 
 exit();
 
 ?>