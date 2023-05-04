
<?php
// Connecting to the Database
$servername = "localhost";
$username = "root";
$password = "";

// Create a connection
$conn = mysqli_connect($servername, $username, $password);

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "weather_data";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// SQL to create table
$sql = "CREATE TABLE weather (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
location VARCHAR(30) NOT NULL,
date DATE NOT NULL,
time TIME NOT NULL,
temperature FLOAT(4,2) NOT NULL,
humidity FLOAT(4,2) NOT NULL
)";

// Execute SQL query
if ($conn->query($sql) === TRUE) {
  echo "Table weather created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

// Close database connection
$conn->close();


// Die if connection was not successful
if (!$conn){
     die("Sorry we failed to connect: ". mysqli_connect_error());
}
else{
echo "Connection was successful<br>";
}

// Create a db
$sql = "CREATE DATABASE weather_data";
$result = mysqli_query($conn, $sql);

// Check for the database creation success
if($result){
echo "The db was created successfully!<br>";
}
else{
     echo "The db was not created successfully because of this error ---> ". mysqli_error($conn);
}
?>
