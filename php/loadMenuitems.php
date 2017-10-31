<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

$response= (object)null;
$response->code=(array)[];
$response->href= (array)[];
$response->name= (array)[];
$response->description= (array)[];



$query="SELECT * FROM menuitems WHERE menuitems.overlapId=$obj->id";

$result = $mysql->query($query);
$respone->code[]=200;
if($result->num_rows > 0)
{
     while($row=$result->fetch_assoc())
    {
        $respone->href[]=urlencode($row["href"]);
        $respone->name[]=$row["name"];
        $respone->description[]=$row["description"];
    }

    echo json_encode($respone);
}
else
{
    echo '{"code":[-1],"error":"Brak przedmiot�w."}';
   // header('Location:../sign-in.html');
}

?>
