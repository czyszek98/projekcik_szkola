<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);


$queryLogin="select * from users where login='".$obj->login."' and password='".$obj->password."'";

	$result = $mysql->query($queryLogin);
	$results= $result->fetch_assoc();
	$userId=$results['id'];
	
	$idTheme=$obj->theme;

 
    $mysql->query("UPDATE users SET idTheme='"."$idTheme"."' WHERE id='"."$userId"."' ");
	

$queryTheme="SELECT * FROM `theme` WHERE id='"."$idTheme"."' ";
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