<?php
if(isset($_POST['submit'])) {

$destino= "instalacionesgabriel@gmail.com";
$subject = $_POST['subject'];
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$headers = "From:Contact Form <$myemail>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";

echo "Your message has been sent successfully!";
mail($destino, $subject, $message, $headers);


} else {

echo "An error occurred during the submission of your message";

}
?>