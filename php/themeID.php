<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

	$respone=(object)[];
	$respone->name=(array)[];
	$respone->id=(array)[];
	
	$query="SELECT * FROM `theme`";
		
	$result = $mysql->query($query);

	

		$i=0;
	while($idTheme = $result->fetch_assoc())
	{
		$respone->id[$i]=$idTheme["id"];
		$respone->name[$i]=$idTheme["themeName"];
		$i++;
		
		
	}
	
	
	
	
	
	
	
	
	echo json_encode($respone);
	








?>