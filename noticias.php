<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Irene Álvarez-Nava González</title>
</head>
<body>
    <?php
        $servidor = "localhost";
        $usuario = "root";
        $clave = "root";
        $bbdd = "portfolio";
    
    // Conexión al servidor
    
    $conexion = mysqli_connect($servidor, $usuario, $clave, $bbdd) or die ("Imposible conectar");
    
    // Al terminar, se cierra la conexión
    
    mysql_close($conexion);
            
            
    
    ?>
</body>
</html>