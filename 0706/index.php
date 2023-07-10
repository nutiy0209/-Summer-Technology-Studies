<?php
    $name = $_POST["name"]; 
    $name2 = $_POST["name2"];   
    $date = $_POST["date"];
    $say = $_POST["say"];

    $link = mysqli_connect("localhost", "root", "", "tech");
    if($link){
        mysqli_query($link,'SET NAMES utf8');
    }
    $sql = "INSERT INTO `fuck`(`name`, `name2`, `date`, `say`) VALUES ('$name', '$name2', '$date', '$say')";
    echo $sql;
    $fuck = mysqli_query($link, $sql);
    print "<script>";
    print "alert('紀錄成功');";
    print "window.location.href='index.html';";
    print "</script>";
?>
 