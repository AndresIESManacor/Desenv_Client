<?php

include("../Connection.php");
$stmt = $conn->prepare("SELECT * FROM coordenadas");
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
