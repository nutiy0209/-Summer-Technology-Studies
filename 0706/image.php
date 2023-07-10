<?php 
    $type = exif_imagetype("lemon.png");
    echo "<h1>類型" .$type."<br>";

    $weight = getimagesize("lemon.png")[0];
    echo "<h1>寬:".$weight."<br>";

    $height = getimagesize("lemon.png")[1];
    echo "<h1>高:".$height."<br>";

    $format = getimagesize("lemon.png")[2];
    echo "<h1>格式:".$format."<br>";
    
    $imName = getimagesize("lemon.png")[3];
    echo "<h1>名稱:".$imName."<br>";
?>