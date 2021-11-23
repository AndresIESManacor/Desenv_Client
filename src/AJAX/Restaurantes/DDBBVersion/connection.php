<?php
$servername = "localhost";
$user = "root";
$password = "militaxx5AGB5";
$database = "restarante";

$conn = new mysqli($servername, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>