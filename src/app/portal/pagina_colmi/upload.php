<?php
if ( !empty( $_FILES ) ) {
    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
    $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];
    move_uploaded_file( $tempPath, $uploadPath );
    $answer = array( 'answer' => 'File transfer completed' );
    $json = json_encode( $answer );
    

    $dir    = 'uploads/';
	$files1 = scandir($dir);
	$query = 'INSERT INTO imagenes(path, name) VALUES ';
	$aImages = array();
	foreach ($files1 as $key => $value) {
		if($value != '.' && $value != '..'){
			$query .= "('uploads/".$value ."','$value'),";
			$aImages[] = $value;
		}
	}
	$query = substr($query, 0, -1);
	$con=mysqli_connect("localhost","root","root","emi");
	if (mysqli_connect_errno())
	{
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}

	// Perform queries 
	mysqli_query($con,"TRUNCATE TABLE imagenes;");
	mysqli_query($con,$query);
	mysqli_close($con);


    echo json_encode( $aImages );
} else {
    echo 'No files';
}
?>