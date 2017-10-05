<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

$response= (object)null;
$response->code=(array)[];
$response->id= (array)[];
$response->name= (array)[];
$response->background= (array)[];



$query="SELECT DISTINCT subjects.* FROM apps,subjects WHERE subjects.id=apps.subjectId";

$result = $mysql->query($query);
$respone->code[]=200;
if($result->num_rows > 0)
{
     while($subject=$result->fetch_assoc())
    {
        $respone->id[]=$subject["id"];
        $respone->name[]=$subject["name"];
        $respone->background[]=$subject["background"];
    }   
    
    echo json_encode($respone);
}
else
{
    echo '{"code":[-1],"error":"Brak przedmiotów."}';
   // header('Location:../sign-in.html');
}

?>