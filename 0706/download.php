<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>檔案管理系統</h1>
    <h3>檔案下載</h3>
    <?php 
        $file = scandir("./uploads2/", 1);
        foreach($file as $value){
            if ($value != "." && $value != ".."){
                echo $value."<a href='d02.php?file=".$value."'>"."$value 下載</a></br>";
            }
        }
    ?>
    <h3>檔案上傳</h3>
    <form method="post" action="upload_01.php" enctype="multipart/form-data">
        <input type="file" name="myfile" size="50"><br><br>
        <input type="submit" value="上傳">
        <input type="reset" value="重新設定">
    </form>
</body>
</html>