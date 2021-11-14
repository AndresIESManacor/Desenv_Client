<?php
$value1 = $_REQUEST["value1"];
$value2 = $_REQUEST["value2"];
$operation = $_REQUEST["operation"];

if ($operation === "addition") {
    echo intval($value1)+intval($value2);
} else if ($operation === "substraction") {
    echo intval($value1)-intval($value2);
} else if ($operation === "product") {
    echo intval($value1)*intval($value2);
} else if ($operation === "division") {
    echo intval($value1)/intval($value2);
}
?>