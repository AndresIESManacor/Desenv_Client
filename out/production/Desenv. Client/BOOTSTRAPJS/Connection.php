<?php
$servername = "localhost";
$user = "root";
$password = "";
$database = "restaurante";

$conn = new mysqli($servername, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$table = "Restaurante";