<?php
	$action = $_REQUEST['action'];
	switch ($action) {
		case 'getColmilNotas':
			$query = "SELECT titulo, contenido FROM colmilNotas LIMIT 1";
			$con=mysqli_connect("localhost","root","root","emi");
			if (mysqli_connect_errno())
			{
			  echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}

			// Perform queries 
			$result = mysqli_query($con,$query);
			while($row = $result->fetch_array())
			{
				$rows[] = $row;
			}
			mysqli_close($con);
			echo json_encode($rows);
			break;
		case 'getImages':
			$query = "SELECT name FROM imagenes";
			$con=mysqli_connect("localhost","root","root","emi");
			if (mysqli_connect_errno())
			{
			  echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}

			// Perform queries 
			$result = mysqli_query($con,$query);
			while($row = $result->fetch_array())
			{
				$rows[] = $row['name'];
			}
			mysqli_close($con);
			echo json_encode($rows);
			break;
		case 'saveColmilNotas':
			$titulo = $_REQUEST['titulo'];
			$contenido = $_REQUEST['contenido'];
			$query = "INSERT INTO colmilNotas ( titulo, contenido) VALUES ('$titulo', '$contenido');";

			$con1=mysqli_connect("localhost","root","root","emi");
			print_r($con1);
			if (mysqli_connect_errno())
			{
			  echo "Failed to connect to MySQL: " . mysqli_connect_error();
			}

			// Perform queries 
			$result =mysqli_query($con1,"TRUNCATE TABLE colmilNotas;");
			mysqli_query($con1,$query);		
			mysqli_close($con1);
			echo $result;
			break;
		default:
			# code...
			break;
	}
?>