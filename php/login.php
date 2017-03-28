<?php
session_start();

$login = $_POST["login"];
$password = $_POST["password"];

include "connect.php";

$query="select * from users where login='".$login."' and password='".$password."'";

$result = $mysql->query($query);

if($result->num_rows == 1)
{
$_SESSION["login"] = $_POST["login"];
$_SESSION["password"] = $_POST["password"];
$row=$result->fetch_assoc();
$query="SELECT students.name,students.laset_name FROM users,students WHERE students.user_id='".$row["id"]."';";

$result = $mysql->query($query);
$row2=$result->fetch_assoc();

printf("Hello %s %s !",$row2["name"],$row2["laset_name"]);
}
else
{
    echo "Z³y login lub has³o.";
   // header('Location:../sign-in.html');
}

?>