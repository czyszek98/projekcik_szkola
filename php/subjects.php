<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

$response= (object)null;
$response->code=(array)[];
$response->id= (array)[];
$response->name= (array)[];




$query="SELECT * FROM subjects ";

$result = $mysql->query($query);
$respone->code[]=200;
if($result->num_rows > 0)
{
     while($subject=$result->fetch_assoc())
    {
        $respone->id[]=$subject["id"];
        $respone->name[]=$subject["name"];
    }   
    
    echo json_encode($respone);
}
else
{
    echo '{"code":[-1],"error":"Brak przedmiot�w."}';
   // header('Location:../sign-in.html');
}

?>