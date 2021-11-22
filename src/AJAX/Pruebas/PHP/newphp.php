<?php

$marca = $_REQUEST["marca"];

$conn = new mysqli("localhost", "root", "andres12345", "andres_database");
$stmt = $conn->prepare("SELECT * FROM cotxo WHERE marca="$marca);


?>