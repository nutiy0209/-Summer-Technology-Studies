<?php

session_start();

unset($_SESSION['log']);

session_unset();

session_destroy();

header("location:login.html");

exit();

?>