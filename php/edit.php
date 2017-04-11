<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);



$query="select * from users where login='".$obj->login."' and password='".$obj->password."'";

$result = $mysql->query($query);

if($result->num_rows == 1)
{
    $user = $result->fetch_assoc();
    $user_id=$user["id"];
    
    $query="select * from students where user_id='".$user_id."'";
    
    if($obj->element == "login" || $obj->element == "password" || $obj->element == "email")
    {
        $mysql->query("UPDATE users SET ".$obj->element."='".$obj->text."' WHERE id=".$user["id"]);
    }
    else
    {
        $mysql->query("UPDATE students SET ".$obj->element."='".$obj->text."' WHERE user_id=".$user["id"]);
    }
    
    $result2 = $mysql->query($query);
    $student=$result2->fetch_assoc();
    
    echo '{"code":200}';
//header('Location:user-log-in.php');
}
else
{
    echo '{"code":-1,"error":"Z³y login lub has³o."}';
   // header('Location:../sign-in.html');
}

?>