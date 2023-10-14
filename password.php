<?php
$password = "yourpassword"; // Change this to your actual password

if (isset($_POST['entered_password'])) {
    $enteredPassword = $_POST['entered_password'];

    if ($enteredPassword === $password) {
        echo json_encode(['status' => 'success']);
    } else {
        echo json_encode(['status' => 'error']);
    }
} else {
    echo json_encode(['status' => 'error']);
}
?>
