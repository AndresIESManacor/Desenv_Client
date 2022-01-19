<?php
header("Content-Type: application/json; charset=UTF-8");
include("../Connection.php");

$id = $_REQUEST["id"];
$nom = mysqli_real_escape_string($conn, $_REQUEST["nom"]);
$pob = mysqli_real_escape_string($conn,$_REQUEST["pob"]);
$type = mysqli_real_escape_string($conn,$_REQUEST["type"]);
$price = mysqli_real_escape_string($conn,$_REQUEST["price"]);
$sql = "UPDATE $table SET Nom = '".$nom."', Poblacio = '".$pob. "', Tipo = '".$type. "', CategoriaPrecio = '".$price. "' WHERE Id= '".$id."'";

$stmt = $conn->prepare($sql);
$stmt->execute();
echo json_encode($sql);