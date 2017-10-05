<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);



$query="select * from users where login='".$obj->login."' and password='".$obj->password."'";

$result = $mysql->query($query);

if($result->num_rows == 1)
{
    $user = $result->fetch_assoc();
    $userId=$user["id"];
	
	    if($user["accountType"] == 'S') $accountType="students";
    else if($user["accountType"] == 'T') $accountType="teachers";
	else if($user["accountType"] == 'A') $accountType="admins";
	else if($user["accountType"] == 'P') $accountType="parents";
    
    $query="select * from ".$accountType." where userId='".$userId."'";
    
    if($obj->element == "login" || $obj->element == "password" || $obj->element == "email")
    {
        $query="select * from users where ".$obj->element."='".$obj->text."'";
        
        $result = $mysql->query($query);
        if($result->num_rows == 0)
        {
            $mysql->query("UPDATE users SET ".$obj->element."='".$obj->text."' WHERE id=".$user["id"]);
            echo '{"code":200}';
        }
        else
        {
            echo '{"code":-1,"error":"Podany login jest ju¿ zajêty."}';
        }
    }
    else
    {
        $result2 = $mysql->query($query);
        if($result2->num_rows == 0)$mysql->query("INSERT INTO ".$accountType."(userId,name,lastName,class,active) VALUES (". $userId .",'','','',0)");
        $mysql->query("UPDATE ".$accountType." SET ".$obj->element."='".$obj->text."' WHERE userId=".$user["id"]);
        echo '{"code":200}';
    }
    
    
//header('Location:user-log-in.php');
}
else
{
    echo '{"code":-1,"error":"Z³y login lub has³o."}';
   // header('Location:../sign-in.html');
}

?>