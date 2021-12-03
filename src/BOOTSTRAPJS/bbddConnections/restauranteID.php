<?php
header("Content-Type: application/json; charset=UTF-8");

include("../Connection.php");

$stmt = $conn->prepare("SELECT * FROM $table WHERE Id= ".$_REQUEST["id"]);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);