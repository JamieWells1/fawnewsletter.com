<?php

/* 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $year = $_POST["year"];
    $question = $_POST["question"];

    // Check if all required fields are filled
    if (!empty($name) && !empty($year) && !empty($question)) {
        $to = "jamiewells528@gmail.com";
        $subject = "Form Submission";
        $message = "Name: $name\nYear: $year\nQuestion: $question\n";

        // Attempt to send the email
        if (mail($to, $subject, $message)) {
            header("Location: thank-you.html");
            exit(); // Stop script execution after redirection
        } else {
            echo "Email could not be sent. Please try again later.";
        }
    } else {
        echo "Please fill out all required fields.";
    }
}
*/
