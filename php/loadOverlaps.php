<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);

$response= (object)null;
$response->code=(array)[];
$response->id= (array)[];
$response->name= (array)[];



$query="SELECT overlaps.id,overlaps.name FROM overlaps,users WHERE ( overlaps.accountType = users.accountType && users.login = '$obj->login' ) OR ( overlaps.accountType = 'C' && NOT overlaps.accountType = users.accountType && users.login = '$obj->login' )";

$result = $mysql->query($query);
$respone->code[]=200;
if($result->num_rows > 0)
{
     while($row=$result->fetch_assoc())
    {
        $respone->id[]=$row["id"];
        $respone->name[]=$row["name"];
    }

    echo json_encode($respone);
}
else
{
    echo '{"code":[-1],"error":"Brak przedmiot�w."}';
   // header('Location:../sign-in.html');
}

?>
