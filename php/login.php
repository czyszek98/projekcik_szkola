<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);



$query="select * from users where login='".$obj->login."' and password='".$obj->password."'";

$result = $mysql->query($query);

if($result->num_rows == 1)
{
    echo '{"code":200,"url":"http://localhost/projekcik_szkola/school.html"}';
//header('Location:user-log-in.php');
}
else
{
    echo '{"code":-1,"error":"Zły login lub hasło."}';
   // header('Location:../sign-in.html');
}

?>
