<!DOCTYPE HTML>
<?php
	$mysqli = new mysqli('localhost', 'root', "", 'english_learning');
	$result = $mysqli->query("SELECT * FROM `words` ORDER BY RAND() LIMIT 10");
	$row = $result->fetch_assoc();
	$ang= $row["ang"];
	$pol= $row["pol"];
?>
<html lang="pl">
<head>
    <meta charset="utf-8" />
	<script src="script.js"></script>
	<link rel="stylesheet" href="style.css" type="text/css" />
</head>
<body>
<div id="contener">
<form>
	
	<a href=" http://localhost/projekcik_szkola/apk/english/words/add_words.php"><input type="button" value="Dodaj słówka" onclick="dodaj()" style="height:50px;width:140px;font-size:20px;" /></a>
	<a href=" http://localhost/projekcik_szkola/apk/english/words/load_words.php"><input type="button" value="Edycja słówek" onclick="dodaj()" style="height:50px;width:140px;font-size:20px;" /></a>
	</form>
</div>
<div id="content" >

	<form>
	<p  style="font-size:38px;text-align:center;padding:20px;margin-bottom:-8px;"><?php echo $ang; ?></p>
	<br><br>
	<input id="pol" type="text" name="word" style="height:30px; font-size:24px;margin-left:22%;margin-top:-30%;"/>
	<br><br>
	<input type="button" value="Sprawdź" onclick="sprawdz()" style="height:50px;width:100px;margin-left:40%;font-size:20px;"/>
	<br><br>
	<input type="button" value="Losuj kolejne słowo" onclick="window.location.reload()" style="height:50px;width:250px;margin-left:26%;font-size:20px;"/>
	
	</form>
	
</div>
</body>
<script>
	function sprawdz()
	{
		var odp = document.getElementById("pol");
		if(odp.value=="<?php echo $pol; ?>")
		{
			alert("DOBRZE!");
			odp.style.backgroundColor="#4c9900";
			odp.style.color="white";
			odp.disabled=true;
		}
		else
		{
			alert("ŹLE!");
			odp.style.backgroundColor="#ff3333";
		}
	}
	
</script>
</html>


