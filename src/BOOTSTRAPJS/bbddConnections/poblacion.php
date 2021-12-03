<?php

include("../Connection.php");
$stmt = $conn->prepare("SELECT DISTINCT Poblacio FROM $table");
if (isset($_GET['poblacion'])) {
    $stmt = $conn->prepare("SELECT * FROM $table WHERE Poblacio='" . $_GET['poblacion']."'");
}
if (isset($_GET['id'])) {
    $stmt = $conn->prepare("SELECT * FROM $table WHERE Id='" . $_GET['id']."'");
}
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
