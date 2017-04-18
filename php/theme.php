<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);


$queryLogin="select * from users where login='".$obj->login."' and password='".$obj->password."'";

	$result = $mysql->query($queryLogin);
	$results= $result->fetch_assoc();
	$user_id=$results['id'];
	
	$id_theme=$obj->theme;

 
    $mysql->query("UPDATE users SET idTheme='"."$id_theme"."' WHERE id='"."$user_id"."' ");
	

$queryTheme="SELECT * FROM `theme` WHERE id='"."$id_theme"."' ";
	$result = $mysql->query($queryTheme);

	$themeContent= $result->fetch_assoc();
	
    $backgroundColor=$themeContent["backgroundColor"];
	$footerColor=$themeContent["footerColor"];
	$profileColor=$themeContent["profileColor"];
	
	
	echo '{"backgroundColor":"'.$backgroundColor.'",
			"footerColor":"'.$footerColor.'",
			"profileColor":"'.$profileColor.'"
		}';

	
	?>