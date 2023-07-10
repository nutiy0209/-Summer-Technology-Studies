<?php
 ini_set('display_errors','1');
 error_reporting(E_ALL);
 $link = mysqli_connect("localhost", "root","","guest");
 $author = $_POST["author"];
 $subject = $_POST["subject"];
 $content = $_POST["content"];
 $current_time = date("Y-m-d H:i:s");

$sql = "INSERT INTO `guest`(`user`, `title`, `content`, `date`) VALUES ('$author','$subject','$content','$current_time')";
$result = mysqli_query($link,$sql);
header("location:db.php");
mysqli_close($link);
exit();

?>