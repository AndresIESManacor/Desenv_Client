<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            width: 100%;
            height: 100vh;
            text-align: center;
        }
        table, tr, th, td {
            font-size: 32px;
            border: skyblue solid 2px;
        }
        div {
            text-align: center;
            margin-left: 25%;
        }
    </style>
</head>
<body onload="loadDoc()">
<h1>TABLE WITH XML</h1>
<div>
    <table id="table"></table>
</div>
<?php
$servername = "localhost";
$user = "root";
$password = "militaxx5AGB5";
$database = "restaurante";

$conn = new mysqli($servername, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$table = "restaurantes";

$sql = "SELECT * FROM $table";
echo $sql;
/*$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        $text .= $row["Id"] ." ". $row["Nom"] ." ".$row["Poblacio"]." ".$row["CategoriaPrecio"];
    }
}
*/
?>
</body>
</html>