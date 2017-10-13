<!DOCTYPE HTML>

<html lang="pl">
<head>
    <meta charset="utf-8" />
	<script src="script.js"></script>
	<link rel="stylesheet" href="style.css" type="text/css" />
</head>
<body>
<div id="contener">
<form>
	<a href=" http://localhost/projekcik_szkola/apk/english/words/ang_learn.php"><input type="button" value="Powrót" onclick="dodaj()" style="height:50px;width:140px;font-size:20px;" /></a>
	<p  style="font-size:38px;text-align:center;padding:20px;margin-bottom:-80px;color:white;">DODAJ SŁÓWKO</p>
</form>
</div>
<div id="content" >

	<form action="addNewWord.php" method="POST">
	<p style="font-size:20px; text-align:center;">Po angielsku:</p><input id="ang" type="text" name="ang" style="height:30px; font-size:24px;margin-left:22%;margin-top:-30%;"/>
	<br><br>
	<p style="font-size:20px; text-align:center;">Po polsku:</p><input id="pol" type="text" name="pol" style="height:30px; font-size:24px;margin-left:22%;margin-top:-30%;"/>
	<br><br>
	
	<input type="submit" value="Dodaj"  style="height:50px;width:250px;margin-left:26%;font-size:20px;"/>
	
	</form>
	
</div>
</body>
<script>
	
</script>
</html>
