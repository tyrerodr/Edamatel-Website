<?php
$nombre = $_POST['inputNombre'];
$empresa= $_POST['inputEmpresa'];
$telefono = $_POST['inputTelefono'];
$correo=$_POST['inputCorreo'];
$servicio=$_POST['inputServicio'];
$descripcion= $_POST['inputDescripcion'];
$ubicacionyref=$_POST['inputUbicacion'];

$header = 'From: ' . $mail . ", de la empresa ".$empresa."\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su empresa es: " . $empresa . " \r\n";
$mensaje .= "correo" . $correo . " \r\n";
$mensaje .= "servicio " . $servicio . " \r\n";
$mensaje .= "pequeña descripcion del servicio requerido" . $descripcion . " \r\n";
$mensaje .="Tu ubicacion". $ubicacionyref . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = "tyrerodr@espol.edu.ec";
$asunto = 'Prueba';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:blog.component.html")

?>