<?php


include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);


$query="select * from users where login='".$obj->login."' and password='".$obj->password."'";

	$result = $mysql->query($query);
	$results= $result->fetch_assoc();
	$user_id=$results['id'];
	
	$direction=$obj->dire;
	$value=$obj->edit;
	$pom='"';
if($direction=='weight' || $direction=='height')
{
	
	$query="UPDATE gym SET $direction = $value WHERE id_user = $user_id";
	$result = $mysql->query($query);
}
else if( $direction=='Chest' || $direction=='DeadLift' || $direction=='Sit' || $direction=='MuscleUp')
{
	$query="UPDATE gymStats SET $direction = $value WHERE id_user = $user_id";
	$result = $mysql->query($query);
	
}

	
	
	
	
	
	
	
	
	
	
?>