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
        echo '{"code":-1,"error":"U¿ytkownik o podanym loginie ju¿ istnieje!"}';
    }
   elseif ($row["email"] == $obj->email)
   {
         echo '{"code":-1,"error":"Podany adress email jest ju¿ zajêty!"}';
         
   }
}
else
{
$query="INSERT INTO `users`(`login`, `password`, `email`, `account_type`) VALUES ('$obj->login','$obj->password','$obj->email','$obj->account_type')";    

$result = $mysql->query($query);

$response->url="http://localhost/projekcik_szkola/sign-in.html";
$response->code=200;

echo json_encode($response);
}


