<?php
	$EMAIL_ADDRESSES = 
		array(
			"chairman@csh.rit.edu",
			"eval@csh.rit.edu",
			"history@csh.rit.edu",
			"scholarship@csh.rit.edu",
			"webmaster@csh.rit.edu"
		);

	// Verify that we're sending our message to a valid email
	$recipient = $_POST['sendtoemail'];
	if (! in_array($recipient, $EMAIL_ADDRESSES, TRUE)) {
		header("Location: failure.php");
		exit;
	}

	// Replace newlines to prevent header insertion
	$name = preg_replace('/\R/u', '', $_POST['f1']);
	$email = preg_replace('/\R/u', '', $_POST['f2']);

	// Validate email, this is probably less than great
	$email = filter_var($email, FILTER_VALIDATE_EMAIL);
	if (!email) {
		header("Location: failure.php");
		exit;
	}

	$message = $_POST['f3'];
	$formcontent="From: $name \nEmail: $email \nMessage: $message";
	$subject = "A message from the public website";
	$mailheader = "From: $email \r\n";

	mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
	header("Location: thankyou.php");
?>
