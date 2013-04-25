<?php
	$EMAIL_ADDRESSES = 
		array(
			"chairman@csh.rit.edu",
			"eval@csh.rit.edu",
			"history@csh.rit.edu",
			"scholarship@csh.rit.edu",
			"webmaster@csh.rit.edu"
		);


	$recipient = $_POST['sendtoemail'];
	if (! in_array($recipient, $EMAIL_ADDRESSES, TRUE)) {
		die("Redirect to an error page");
	}

	$name = $_POST['f1'];
	$email = $_POST['f2'];
	$message = $_POST['f3'];
	$formcontent="From: $name \nEmail: $email \nMessage: $message";
	$subject = "A message from the public website";
	$mailheader = "From: $email \r\n";
	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	header("Location: thankyou.php");
?>
