<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

$response= (object)null;
$response->code=(array)[];
$response->id= (array)[];
$response->name= (array)[];
$response->background= (array)[];



$query="SELECT DISTINCT teachers.* FROM lessons,teachers,users WHERE teachers.userId=users.id AND users.id=lessons.userId";

$result = $mysql->query($query);
$respone->code[]=200;
if($result->num_rows > 0)
{
     while($teacher=$result->fetch_assoc())
    {
        $respone->id[]=$teacher["userId"];
        $respone->name[]=$teacher["name"] . " " . $teacher["lastName"];
        $respone->background[]=$teacher["background"];
    }   
    
    echo json_encode($respone);
}
else
{
    echo '{"code":[-1],"error":"Brak przedmiot�w."}';
   // header('Location:../sign-in.html');
}

?>