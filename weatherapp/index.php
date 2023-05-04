<?php

// Connect to the database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "weather_data";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the location from the user
$location = $_GET['location'];

// Check if the data is already in the database
$sql = "SELECT * FROM weather WHERE location='$location'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Data is in the database, retrieve it and return it to the user
    while($row = $result->fetch_assoc()) {
        $date = $row["date"];
        $time = $row["time"];
        $temperature = $row["temperature"];
        $humidity = $row["humidity"];
        // Display the data to the user
        echo "Date: $date<br>";
        echo "Time: $time<br>";
        echo "Temperature: $temperature<br>";
        echo "Humidity: $humidity<br>";
    }
} else {
    // Data is not in the database, make a request to the OpenWeatherMap API
    $url = "https://api.openweathermap.org/data/2.5/weather?q=$location&appid=b94454c9c102038f17439a084022371d";
    $response = file_get_contents($url);
    $data = json_decode($response, true);
    // Store the data in the database
    $date = date("Y-m-d");
    $time = date("H:i:s");
    $temperature = $data["main"]["temp"];
    $humidity = $data["main"]["humidity"];
    $sql = "INSERT INTO weather (location, date, time, temperature, humidity)
            VALUES ('$location', '$date', '$time', '$temperature', '$humidity')";
    $conn->query($sql);
    // Display the data to the user
    echo "Date: $date<br>";
    echo "Time: $time<br>";
    echo "Temperature: $temperature<br>";
    echo "Humidity: $humidity<br>";
}

// Close the database connection
$conn->close();

?>
