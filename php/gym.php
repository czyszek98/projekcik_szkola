<?php


include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

$bmiLicznik=0;
$query="select * from users where login='".$obj->login."' and password='".$obj->password."'";

	$result = $mysql->query($query);
	$results= $result->fetch_assoc();
	$user_id=$results['id'];

$pyt="SELECT * FROM gym WHERE id_user=$user_id";
	
	$result = $mysql->query($pyt);
	$tabFiz= $result->fetch_assoc();
	
	$plan=$tabFiz['Plan'];
	$weight=$tabFiz['weight'];
	$height=$tabFiz['height'];	
	$goal=$tabFiz['goal'];
	$kcal=$tabFiz['kcal'];
	if($plan=="0")
	{	
		$plan="Brak danych";
	}
	if($weight=="0")
	{
		$weight="Brak danych";	
		$bmiLicznik++;
	}	
	if($height=="0")
	{
		$height="Brak danych";
		$bmiLicznik++;		
	}	
	if($bmiLicznik>0)
	{
		$bmi="Nie można policzyć BMI, brak danych";
	}
	else 
	{
		$pom=$height/100;
		$pom=$pom*$pom;
		$bmi=round($weight/$pom, 2);
		
	}
	if($goal=="0")
		$goal="Brak danych";
	if($kcal=="0")
		$kcal="Brak danych";
	
	
	
$ask="SELECT * FROM gymStats WHERE id_user=$user_id";	
	$result = $mysql->query($ask);
	$tabScore= $result->fetch_assoc();
	
	$chest=$tabScore['Chest'];
	$deadLift=$tabScore['DeadLift'];
	$sit=$tabScore['Sit'];
	$muscleUp=$tabScore['MuscleUp'];
	
	if($chest=="0")
		$chest="Brak danych";
	
	
	
	if($deadLift=="0")
		$deadLift="Brak danych";
	if($sit=="0")
		$sit="Brak danych";
	if($muscleUp=="0")
		$muscleUp="Brak danych";

	
	
	
	
	echo '{ "chest":"'.$chest.'" , 
			"deadLift":"'.$deadLift.'",
			"sit":"'.$sit.'",
			"muscleUp":"'.$muscleUp.'",
			"plan":"'.$plan.'",
			"weight":"'.$weight.'",
			"height":"'.$height.'",
			"bmi":"'.$bmi.'",
			"kcal":"'.$kcal.'",
			"goal":"'.$goal.'"
		}';


?>