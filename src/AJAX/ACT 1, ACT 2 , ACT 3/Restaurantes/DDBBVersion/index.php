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
    <h1>TABLE WITH (PHP connected to DDBB)</h1>
<div>
    <table id="table">
        <?php
        $servername = "localhost";
        $user = "root";
        $password = "militaxx5AGB5";
        $database = "restaurante";

        $conn = new mysqli($servername, $user, $password, $database);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        $table = "restaurante";

        $sql = "SELECT * FROM $table";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $text = "<tr><th>ID</th><th>NOMBRE</th><th>POBLACION</th><th>TIPO</th><th>CATEGORIA</th></tr>";
            // output data of each row
            while ($row = $result->fetch_assoc()) {
                $text .= "<tr>";
                $text .=
                    "<td>". $row["Id"] ."</td>".
                    "<td>". $row["Nom"] ."</td>".
                    "<td>". $row["Poblacio"] ."</td>".
                    "<td>". $row["Tipo"] ."</td>";

                $categoria = $row["CategoriaPrecio"];
                switch ($categoria) {
                    case 1:
                        $text .= "<td>Muy Barato!</td>";
                        break;
                    case 2:
                        $text .= "<td>Barato!!</td>";
                        break;
                    case 3:
                        $text .= "<td>Caro!!!</td>";
                        break;
                }
                $text .= "</tr>";
            }
            echo $text;
        }
        ?>
    </table>
</div>
</body>
</html>