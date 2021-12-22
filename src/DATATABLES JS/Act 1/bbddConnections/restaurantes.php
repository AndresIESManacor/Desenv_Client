<?php
header("Content-Type: application/json; charset=UTF-8");

include("../Connection.php");
if (isset($_GET['id'])) {
    $stmt = $conn->prepare("SELECT * FROM $table WHERE Id='" . $_GET['id']."'");
} else {
    $stmt = $conn->prepare("SELECT * FROM $table ORDER BY Id");
}
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);