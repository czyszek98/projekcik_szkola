<!DOCTYPE HTML>
<html lang="pl">
<head>
    <meta charset="utf-8" />
	<script src="script.js"></script>
	<link rel="stylesheet" href="style.css" type="text/css" />
</head>
<body>

<a href=" http://localhost/projekcik_szkola/apk/english/words/ang_learn.php"><input type="button" value="Powrót" onclick="dodaj()" style="height:50px;width:140px;font-size:20px;" /></a><br><br>

<?php
	$mysqli = new mysqli('localhost', 'root', "", 'english_learning');

	
	$result = $mysqli->query("SELECT * FROM words");
	if($result->num_rows >0)
	{
		while($word=$result->fetch_assoc())
		{
			echo "<div class='word'>";
			echo $word['id'] . " ";
			echo $word['ang'] . " ";
			echo $word['pol'] . " " . "<br>";
			echo "</div>";
		}
	}
	
?>

</body>
</html>