<?php
$servername = "ec2-54-158-232-223.compute-1.amazonaws.com";
$username = "ruwebbybgijlqt";
$password = "d149f3a994d6d13b3d59020b9ca31f2175aeaa811e82ef624c912a0439ffdc88";
$dbname = "deo81gisj4911b";

// Create connection
$conn = new heroku($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($conn->query($heroku) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $heroku . "<br>" . $conn->error;
}

$conn->close();
?>