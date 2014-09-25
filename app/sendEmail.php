<?php

/* Set e-mail recipient */
$to = "drdixie@gmail.com";
/* Set email subject */
$subject = "Comment/Question From BachmeierChiro.com";
$headers .= 'From: bachmeierChiro.com' . "\r\n";

$name     = check_input($_POST['name']);
$email    = check_input($_POST['email']);
$comments = check_input($_POST['comments']);
$message  = "From: $name
E-mail: $email

Comments: 
$comments

End of message.

This was sent from bachmeierChiro.com";

/* Send the message using mail() function */
mail($to, $subject, $message, $headers);
header("Location: index.html#contact");

function check_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>
