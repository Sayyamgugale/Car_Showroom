<?php
// Sanitize and collect form data to prevent header injection & cross-site scripting
$name = isset($_POST['name']) ? htmlspecialchars(strip_tags(trim($_POST['name']))) : '';
$visitor_email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$preference = isset($_POST['preference']) ? htmlspecialchars(strip_tags(trim($_POST['preference']))) : 'General Inquiry';
$message = isset($_POST['message']) ? htmlspecialchars(strip_tags(trim($_POST['message']))) : '';

// Validation checks
if (empty($name) || empty($visitor_email) || empty($message)) {
    header("Location: contact.html?status=invalid");
    exit();
}

// Send Email Notification
$email_from = 'info@apexautogallery.com'; // Customizable showroom email sender
$email_subject = 'New Showroom Consultation Query';
$email_body = "You have received a new message from the showroom website contact form.\n\n".
              "User Name: $name\n".
              "User Email: $visitor_email\n".
              "Preferred Vehicle: $preference\n".
              "Message:\n$message\n";

$to = 'gugalesayyam@gmail.com'; // Owner recipient email
$headers = "From: $email_from\r\n";
$headers .= "Reply-To: $visitor_email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Attempt to send email
$mail_sent = @mail($to, $email_subject, $email_body, $headers);

// Save to Database (Fallbacks gracefully if DB is not configured)
$servername = "localhost";
$username = "root";  
$password = "";      
$database = "porsche_contact"; 

try {
    // Suppress connection warnings and try connecting
    $conn = @new mysqli($servername, $username, $password, $database);
    
    if (!$conn->connect_error) {
        // Prepare table if not exists
        $table_check = "CREATE TABLE IF NOT EXISTS contact_messages (
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            preference VARCHAR(100) NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )";
        $conn->query($table_check);

        // Bind and insert
        $stmt = $conn->prepare("INSERT INTO contact_messages (name, email, preference, message) VALUES (?, ?, ?, ?)");
        if ($stmt) {
            $stmt->bind_param("ssss", $name, $visitor_email, $preference, $message);
            $stmt->execute();
            $stmt->close();
        }
        $conn->close();
    }
} catch (Exception $e) {
    // Fail silently on database setup issues so form submission doesn't crash the client experience
}

// Redirect back with success message parameter
header("Location: contact.html?status=success");
exit();
?>
