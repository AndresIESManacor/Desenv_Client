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
<h1>TABLE WITH PHP</h1>
<div>
    <table id="table">
        <?php
        include("arrayRestaurante.php");
        echo "<tr><th>ID</th><th>NOMBRE</th><th>POBLACION</th><th>TIPO</th><th>CATEGORIA</th></tr>";
        for ($i = 0; $i < count($restaurantes); $i++) {
            $categoria = returnCategoria($restaurantes[$i]["CATEGORIA"]);
            echo "<tr>";
            echo "<td>". $restaurantes[$i]["ID"] . "</td>";
            echo "<td>". $restaurantes[$i]["NOMBRE"] . "</td>";
            echo "<td>". $restaurantes[$i]["POBLACION"] . "</td>";
            echo "<td>". $restaurantes[$i]["TIPO"] . "</td>";
            echo "<td>". $categoria . "</td>";
            echo "</tr>";
        }

        function returnCategoria($categoryOnArray) {
            $cat = $categoryOnArray;
            if ($cat===1) {
                $cat = "Muy Barato!";
            } else if ($cat===2) {
                $cat = "Barato!!";
            } else if ($cat===3) {
                $cat = "Caro!!!";
            }
            return $cat;
        }
        ?>
    </table>
</div>
</body>
</html>