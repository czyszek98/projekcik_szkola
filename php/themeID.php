<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

	
	$query="SELECT id FROM `theme` ORDER BY id DESC LIMIT 1 ";
		
	$result = $mysql->query($query);

	$idTheme = $result->fetch_assoc();
    $id_theme=$idTheme["id"];
	echo '{"idTheme":'.$id_theme.'}';
	








?>