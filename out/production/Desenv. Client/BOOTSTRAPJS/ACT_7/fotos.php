<?php
header("Content-Type: application/json; charset=UTF-8");
$dir = '../Logos';
$files = scandir($dir);
echo json_encode($files);
