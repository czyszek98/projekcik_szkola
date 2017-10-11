<?php
	$mysqli = new mysqli('localhost', 'root', "", 'english_learning');
	
	$ang = $_POST["ang"];
	$pol = $_POST["pol"];
	
	
	
	
	
	$result = $mysqli->query("INSERT INTO `words`(`id`, `ang`, `pol`) VALUES ('','".$ang."','".$pol."')");
	
	header("Location: http://localhost/projekcik_szkola/apk/english/words/add_words.php");
	
	
	
?>