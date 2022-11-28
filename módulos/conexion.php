<?php
date_default_timezone_set('America/Lima');

$conexion = mysqli_connect("AWS_instancia", "db-school.ceew4yzvrpar.us-east-1.rds.amazonaws.com", "12345678", "dbSchool");

if (mysqli_connect_errno()) {
	printf("Falló la conexión: %s\n", mysqli_connect_error());
	exit();
}

mysqli_set_charset($conexion, 'utf8');
