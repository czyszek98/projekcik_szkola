<!DOCTYPE HTML>
<?php
	$mysqli = new mysqli('localhost', 'root', "", 'apk');
	$result = $mysqli->query("SELECT * FROM `words` ORDER BY RAND() LIMIT 1");
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
	<input type="button" value="Dodaj słówka" onclick="dodaj()" style="height:50px;width:140px;font-size:20px;" />
</form>
</div>
<div id="content" >

	<form>
	<p  style="font-size:38px;text-align:center;padding:20px;margin-bottom:-8px;"><?php echo $ang; ?></p>
	<br><br>
	<input id="pol" type="text" name="word" style="height:30px; font-size:24px;margin-left:22%;margin-top:-30%;"/>
	<br><br>
	<input  id="spr" type="button" value="Sprawdź" onclick="sprawdz()" style="height:50px;width:120px;margin-left:10%;font-size:20px;"/>
	<input type="button" value="Odpowiedź" onclick="odpowiedz()" style="height:50px;width:120px;margin-left:20%;font-size:20px;"/>
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
	function odpowiedz()
	{
		var spr = document.getElementById("spr");
		spr.disabled=true;
		var odp = document.getElementById("pol");
		odp.value="<?php echo $pol; ?>";
		odp.disabled=true;
	}
	
</script>
</html>


