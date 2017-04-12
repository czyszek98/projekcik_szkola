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
    
    if(!isset($student["laset_name"]))
    {
        $student["laset_name"]="bark";
    }
    elseif($student['laset_name']=="")
    {
        $student['laset_name']="bark";
    }
    if(!isset($student['class'])) 
    {
        $student['class']="bark";
    }
        elseif($student['class']=="")
    {
        $student['class']="bark";
    }
    
    echo '{"code":200,"name":"'.$student['name'].'","lastName":"'.$student['laset_name'].'","email":"'.$user['email'].'","class":"'.$student['class'].'"}';
//header('Location:user-log-in.php');
}
else
{
    echo '{"code":-1,"error":"Z³y login lub has³o."}';
   // header('Location:../sign-in.html');
}

?>