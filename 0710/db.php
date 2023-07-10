<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form name="myForm" method="post" action="post.php">
        <table border="0" width="800" align="center" cellspacing="0">
            <tr bgcolor = "#0084CA" align = "center">
                <td colspan="2">
                    <font color="#FFFFFF">在此輸入新留言</font>
                </td>
            </tr>
            <tr bgcolor = "#D9F2FF">
                <td width = "15%">作者</td>
                <td width = "85%"><input name="author" type="text" size="50"></td>
            </tr>
            <tr bgcolor = "#D9F2FF">
                <td width = "15%">主題</td>
                <td width = "85%"><input name="subject" type="text" size="50"></td>
            </tr>
            <tr bgcolor = "#D9F2FF">
                <td width = "15%">內容</td>
                <td width = "85%"><textarea name="content" cols="50" rows="5"></textarea></td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" value="張貼留言">
                    <input type="reset" value="重新輸入">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
<?php 

//建立資料連接
$link = mysqli_connect("localhost", "root","","guest");
$sql="SELECT * FROM guest";

$result = mysqli_query($link,$sql);

//顯示紀錄
echo "<border = '0' width = '800' align = 'center'>";
while ($row = mysqli_fetch_assoc($result)){
    echo "<bgclor = '".'lightblue'."'>";
    echo "<td>作者 : ". $row["user"] . "<br>";
    echo "主題 : ". $row["title"] . "<br>";
    echo "時間 : ". $row["date"] . "<hr>";
    echo $row["content"] . "</td><tr>";   
}

echo "</table>";
//釋放記憶體空間
mysqli_free_result($result);
mysqli_close($link);

?>