<?php
	$destino= "webmastergabi@gmail.com";
	$Nombre = $_POST["Nombre"];
	$Correo = $_POST["Correo"];
	$Teléfono = $_POST["Teléfono"];
	$Mensaje =$_POST["Mensaje"];
	$contenido = "Nombre: ". $Nombre . "\nCorreo: " . $Correo . "\nTeléfono: " . $Teléfono . "\nMensaje: " . $Mensaje;
	mail($destino,"Contacto", $contenido);
	header("Location:gracias.html ");



?>