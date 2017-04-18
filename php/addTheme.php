<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);



$query="INSERT INTO `theme` (themeName, backgroundColor, footerColor, profileColor) VALUES ( '$obj->input', '$obj->color', '$obj->foot', '$obj->prof')";

$mysql->query($query);










?>