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
    
    if($user["accountType"] == 'S') $query="select * from students where userId='".$userId."'";
    else if($user["accountType"] == 'T') $query="select * from teachers where userId='".$userId."'";
	else if($user["accountType"] == 'A') $query="select * from admins where userId='".$userId."'";
	else if($user["accountType"] == 'P') $query="select * from parents where userId='".$userId."'";
	
    $result2 = $mysql->query($query);
    $student=$result2->fetch_assoc();
    
    if(!isset($student['name']))
    {
        $student['name']="bark";
    }
    elseif($student['name']=="")
    {
        $student['name']="bark";
    }
    
    if(!isset($student["lastName"]))
    {
        $student["lastName"]="bark";
    }
    elseif($student['lastName']=="")
    {
        $student['lastName']="bark";
    }
    if(!isset($student['classId'])) 
    {
        $student['classId']="bark";
    }
        elseif($student['classId']=="")
    {
        $student['classId']="bark";
    }
    
    echo '{"code":200,"name":"'.$student['name'].'","lastName":"'.$student['lastName'].'","email":"'.$user['email'].'","classId":"'.$student['classId'].'"}';
//header('Location:user-log-in.php');
}
else
{
    echo '{"code":-1,"error":"Z³y login lub has³o."}';
   // header('Location:../sign-in.html');
}

?>