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
$query="INSERT INTO `users`(`login`, `password`, `email`, `accountType`) VALUES ('$obj->login','$obj->password','$obj->email','$obj->accountType')";    

$result = $mysql->query($query);


$response->url="http://localhost/projekcik_szkola/profile.html";
$response->code=200;

echo json_encode($response);
}

?>


