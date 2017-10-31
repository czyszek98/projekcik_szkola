<?php

$host="localhost";
$username="root";
$passwd="";
$dbname="school";

$mysql = new mysqli($host, $username, $passwd, $dbname);
$mysql->query('SET NAMES utf8');
?>