<?php

  $user = "root";
  $pass = "root";
  $host = "localhost";
  $db = "cooperInfo";

  $conn = mysqli_connect($host, $user, $pass, $db, "8888");
  mysqli_set_charset($conn, 'utf8');

  if (!$conn) {
    echo "something broke...";
    exit;
  }
  //echo "connected";


  $myQuery = "SELECT * FROM mainmodel";
  $result = mysqli_query($conn, $myQuery);

  $rows = array();

  while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  //var_dump($rows);
  //echo json_encode($rows);

  if (isset($_GET['carModel'])) {
    $car = $_GET['carModel'];

    $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
    $result = mysqli_query($conn, $myQuery);

    $row = mysqli_fetch_assoc($result);

    echo json_encode($row);
  }

  //Video Thumbs

  if (isset($_GET['getVideos'])) {

    $myQuery = "SELECT * FROM video";

    $result = mysqli_query($conn, $myQuery);
	$rows = array();

	while($row = mysqli_fetch_assoc($result)) {
		$rows[] = $row;
	}

    echo json_encode($rows);
  }

?>
