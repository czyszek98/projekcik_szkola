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
	
$response->url="http://localhost/projekcik_szkola/php/user-log-in.php";
$response->code=200;

echo json_encode($response);
}


