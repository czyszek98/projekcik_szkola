<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

	
$query="select * from users where login='".$obj->login."' and password='".$obj->password."'";


	$result = $mysql->query($query);
	$results= $result->fetch_assoc();
	$id=$results['idTheme'];

	

		$query="SELECT backgroundColor, footerColor, profileColor FROM theme WHERE theme.id=$id";
		$result = $mysql->query($query);		
		$themeContent= $result->fetch_assoc();
		
		 $backgroundColor=$themeContent["backgroundColor"];
		 $footerColor=$themeContent["footerColor"];
		 $profileColor=$themeContent["profileColor"];
		
		
	echo '{"backgroundColor":"'.$backgroundColor.'",
			"footerColor":"'.$footerColor.'",
			"profileColor":"'.$profileColor.'"
		}';



?>