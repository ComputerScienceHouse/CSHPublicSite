<?php
	$name = $_POST['f1'];
	$email = $_POST['f2'];
	$recipient = $_POST['sendtoemail'];
	$message = $_POST['f3'];
	$formcontent="From: $name \nEmail: $email \nMessage: $message";
	$subject = "A message from the public website";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	header("Location: thankyou");
?>