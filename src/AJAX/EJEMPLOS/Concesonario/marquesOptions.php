<?php
$conn = new mysqli("localhost", "root", "andres12345", "andres_database");
$stmt = $conn->prepare("SELECT * FROM cotxo;");
$stmt->execute();
$result = $stmt->get_result();

while($row = mysqli_fetch_array($result)) {
	echo "<option value='".$row['55']."'>".$row['55']."</option>";
}
?>