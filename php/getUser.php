<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);



$query="select * from users where login='".$obj->login."'";

$result = $mysql->query($query);

if($result->num_rows == 1)
{
  $value = $result->fetch_assoc();
  $account_type=$value["account_type"];
    echo '{"code":200,"account_type":"'.$account_type.'"}';
//header('Location:user-log-in.php');
}
else
{
    echo '{"code":-1,"error":"Nie znaleziono użytkownika."}';
   // header('Location:../sign-in.html');
}

?>
