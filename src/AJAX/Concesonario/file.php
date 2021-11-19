<?php

$conn = new mysqli("localhost", "root", "andres12345", "cotxos");
$stmt = $conn->prepare("SELECT * FROM cotxos ORDER BY matricula");
$stmt->execute();
$result = $stmt->get_result();

echo "<table border='1'>
<tr>
<th>MATRICULA</th>
<th>MODEL</th>
<th>PORTES</th>
<th>PREU</th>
<th>COLOR</th>
<th>MARCA</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['matricula-'] . "</td>";
    echo "<td>" . $row['model'] . "</td>";
    echo "<td>" . $row['portes'] . "</td>";
    echo "<td>" . $row['preu'] . "</td>";
    echo "<td>" . $row['color'] . "</td>";
    echo "<td>" . $row['marca'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($conn);
?>