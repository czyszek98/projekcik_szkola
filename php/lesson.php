<?php

include "connect.php";

$json = $_POST["request"];

$obj = json_decode($json);




$query="SELECT content FROM lessons WHERE id=". $obj->lessonId;

$result = $mysql->query($query);
$respone->code[]=200;
if($result->num_rows > 0)
{
        $row=$result->fetch_assoc();
        echo '{"code":[200],"content":"'.str_replace('"','\\"',$row['content']).'"}';
}
else
{
    echo '{"code":[-1],"error":"Brak przedmiotów."}';
   // header('Location:../sign-in.html');
}

?>