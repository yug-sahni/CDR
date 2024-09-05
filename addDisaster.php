<?php
// Display errors for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection details
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = ""; // Your MySQL password
$dbname = "CDR"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$disasterType = $_POST['disasterType'];
$locationX = $_POST['locationX'];
$locationY = $_POST['locationY'];
$dateOfOccurrence = $_POST['dateOfOccurrence'];
$severityLevel = $_POST['severityLevel'];
$status = $_POST['status'];
$authoritiesReached = isset($_POST['authoritiesReached']) ? 1 : 0;

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO Disasters (DisasterType, LocationX, LocationY, DateOfOccurrence, SeverityLevel, Status, AuthoritiesReached) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sddssii", $disasterType, $locationX, $locationY, $dateOfOccurrence, $severityLevel, $status, $authoritiesReached);

// Execute the statement
if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>
