<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $address = $_POST["address"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $cardNumber = $_POST["card-number"];
    $expiryDate = $_POST["expiry-date"];
    $cvv = $_POST["cvv"];

    // You can perform further validation or processing here
    
    // For demonstration purposes, let's just echo the form data
    echo "Name: $name <br>";
    echo "Address: $address <br>";
    echo "Email: $email <br>";
    echo "Phone: $phone <br>";
    echo "Card Number: $cardNumber <br>";
    echo "Expiry Date: $expiryDate <br>";
    echo "CVV: $cvv <br>";

    // You can then redirect the user to a thank you page or perform any other actions as needed
} else {
    // If the form is not submitted, redirect the user back to the checkout page
    header("Location: checkout.html");
    exit;
}
?>
