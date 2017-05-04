<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

$response= (object)[];

$query="select * from users where login='".$obj->login."' OR email='".$obj->email."'";

$result = $mysql->query($query);

if($result->num_rows > 0)
{
    $row=$result->fetch_assoc();
    if($row["login"] == $obj->login)
    {
        echo '{"code":-1,"error":"Użytkownik o podanym loginie już istnieje!"}';
    }
   elseif ($row["email"] == $obj->email)
   {
         echo '{"code":-1,"error":"Podany adress email jest już zajęty!"}';
         
   }
}
else
{
$query="INSERT INTO `users`(`login`, `password`, `email`, `account_type`) VALUES ('$obj->login','$obj->password','$obj->email','$obj->account_type')";    

$result = $mysql->query($query);

$pyt="select * from users where login='".$obj->login."' and password='".$obj->password."'";

	$result = $mysql->query($pyt);
	$results= $result->fetch_assoc();
	$user_id=$results['id'];


$wys1="INSERT INTO gym (id, id_user, Plan, weight, height, kcal, goal) VALUES ('', $user_id, '', '', '', '', '')";
$result = $mysql->query($wys1);

$wys2="INSERT INTO gymstats (id, id_user, Chest, DeadLift, Sit, MuscleUp) VALUES ('', $user_id, '', '', '', '')";
$result = $mysql->query($wys2);

$response->url="http://localhost/projekcik_szkola/profile.html";
$response->code=200;

echo json_encode($response);
}

?>


