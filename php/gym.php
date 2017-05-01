<?php


include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);


$query="select * from users where login='".$obj->login."' and password='".$obj->password."'";

	$result = $mysql->query($query);
	$results= $result->fetch_assoc();
	$user_id=$results['id'];

$pyt="SELECT * FROM gym,users WHERE users.id=$user_id ";
	
	$result = $mysql->query($pyt);
	$tabFiz= $result->fetch_assoc();
	
	$plan=$tabFiz['Plan'];
	$weight=$tabFiz['weight'];
	$height=$tabFiz['height'];
	$bmi=$tabFiz['bmi'];
	$goal=$tabFiz['goal'];
	
	
$ask="SELECT * FROM gymStats,users WHERE users.id=$user_id";	
	$result = $mysql->query($ask);
	$tabScore= $result->fetch_assoc();
	
	$chest=$tabScore['Chest'];
	$deadLift=$tabScore['DeadLift'];
	$sit=$tabScore['Sit'];
	$muscleUp=$tabScore['MuscleUp'];
	
	
	
	
	echo '{ "chest":"'.$chest.'" , 
			"deadLift":"'.$deadLift.'",
			"sit":"'.$sit.'",
			"muscleUp":"'.$muscleUp.'",
			"plan":"'.$plan.'",
			"weight":"'.$weight.'",
			"height":"'.$height.'",
			"bmi":"'.$bmi.'",
			"goal":"'.$goal.'"
		}';


?>