<?php

include "../../connect.php";

$json = $_POST["request"];

$obj = json_decode($json);




$query="SELECT id,accountType FROM users WHERE login='". $obj->login."' and password='".$obj->password."'";

$result = $mysql->query($query);
if($result->num_rows > 0)
{
		
        $row=$result->fetch_assoc();
		if($row["accountType"]=="T" || $row["accountType"]=="A")
		{
			$userId=$row['id'];
			
			$query="INSERT INTO `lessons` (`id`, `userId`, `name`, `background`, `content`) VALUES (NULL, '$userId', '$obj->title', NULL, '$obj->content')";
			
			if($result = $mysql->query($query))
			{
				echo '{"code":[200]}';
			}
			else
			{
				echo '{"code":[-1],"error":"'. $mysql->sqlstate .'"}';
			}
		}
		else
        echo '{"code":[-1],"error":"Brak uprawnień"}';
}
else
{
    echo '{"code":[-1],"error":"Niepoprawny login lub hasło, zaloguj się ponownie."}';
   // header('Location:../sign-in.html');
}

?>