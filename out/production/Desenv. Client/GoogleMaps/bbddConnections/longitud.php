<?php

include("../Connection.php");
$stmt = $conn->prepare("SELECT DISTINCT coordenadas FROM $table");
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
