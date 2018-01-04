<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

$response= (object)null;
$response->code=(array)[];
$response->id= (array)[];
$response->name= (array)[];
$response->background= (array)[];



$query="SELECT lessons.id,lessons.name,lessons.background FROM lessons WHERE lessons.userId=". $obj->userId;

$result = $mysql->query($query);
$respone->code[]=200;
if($result->num_rows > 0)
{
     while($lesson=$result->fetch_assoc())
    {
        $respone->id[]=$lesson["id"];
        $respone->name[]=$lesson["name"];
        $respone->background[]=$lesson["background"];
    }   
    
    echo json_encode($respone);
}
else
{
    echo '{"code":[-1],"error":"Brak przedmiotów."}';
   // header('Location:../sign-in.html');
}

?>