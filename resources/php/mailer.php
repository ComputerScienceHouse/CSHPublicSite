<?php
// Mailer.php
// Handle mail submission and captcha

require 'key.php';


//** MAIN **//

$name = $_POST['name'];
$email = $_POST['email'];
$position = $_POST['position'];
$message = $_POST['message'];
$g = $_POST['g-recaptcha-response'];

//URL for Google Recaptcha API Endpoint
$url = 'https://www.google.com/recaptcha/api/siteverify';

// Construct POST Data:
// Usage:
// secret - string - reCaptcha Secret Key
// response - google reCaptcha response from POST
// remoteip - string - user's IP address
$data = array('secret' => $secretKey, 'response' => $g, 'remoteip' => $_SERVER["REMOTE_ADDR"]);

// Construct POST request
$options = array(
    'http' => array(
        'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
        'method'  => 'POST',
        'content' => http_build_query($data)
    )
);
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

$result = json_decode($result,true);

if (isset($result) && $result['success'] == "true") {
    //Send email here
    switch ($position) {
        case 'c':
            $sendTo = $chairmanEmail;
            break;
        case 'e':
            $sendTo = $evalsEmail;
            break;
        case 'r':
            $sendTo = $rdEmail;
            break;
        case 'h':
            $sendTo = $historyEmail;
            break;
        case 's':
            $sendTo = $socialEmail;
            break;
        case 'w':
            $sendTo = $webmasterEmail;
            break;
        default:
            $sendTo = $chairmanEmail;
            break;
                
    }
    $message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
 
<meta name="viewport" content="width=device-width"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<title>ZURBemails</title>
<style>
/* ------------------------------------- 
		GLOBAL 
------------------------------------- */
* { 
	margin:0;
	padding:0;
}
* { font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif; }

img { 
	max-width: 100%; 
}
.collapse {
	margin:0;
	padding:0;
}
body {
	-webkit-font-smoothing:antialiased; 
	-webkit-text-size-adjust:none; 
	width: 100%!important; 
	height: 100%;
}


/* ------------------------------------- 
		ELEMENTS 
------------------------------------- */
a { color: #B0197E;}

.btn {
	text-decoration:none;
	color: #FFF;
	background-color: #666;
	padding:10px 16px;
	font-weight:bold;
	margin-right:10px;
	text-align:center;
	cursor:pointer;
	display: inline-block;
}

p.callout {
	padding:15px;
	background-color:#EEE;
	margin-bottom: 15px;
}
.callout a {
	font-weight:bold;
	color: #B0197E;
}

table.social {
/* 	padding:15px; */
	background-color: #ebebeb;
	
}
.social .soc-btn {
	padding: 3px 7px;
	font-size:12px;
	margin-bottom:10px;
	text-decoration:none;
	color: #FFF;font-weight:bold;
	display:block;
	text-align:center;
}
a.fb { background-color: #3B5998!important; }
a.tw { background-color: #1daced!important; }
a.gp { background-color: #DB4A39!important; }
a.ms { background-color: #000!important; }

.sidebar .soc-btn { 
	display:block;
	width:100%;
}

/* ------------------------------------- 
		HEADER 
------------------------------------- */
table.head-wrap { width: 100%;}

.header.container table td.logo { padding: 15px; }
.header.container table td.label { padding: 15px; padding-left:0px;}


/* ------------------------------------- 
		BODY 
------------------------------------- */
table.body-wrap { width: 100%;}


/* ------------------------------------- 
		FOOTER 
------------------------------------- */
table.footer-wrap { width: 100%;	clear:both!important;
}
.footer-wrap .container td.content  p { border-top: 1px solid rgb(215,215,215); padding-top:15px;}
.footer-wrap .container td.content p {
	font-size:10px;
	font-weight: bold;
	
}


/* ------------------------------------- 
		TYPOGRAPHY 
------------------------------------- */
h1,h2,h3,h4,h5,h6 {
font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; line-height: 1.1; margin-bottom:15px; color:#000;
}
h1 small, h2 small, h3 small, h4 small, h5 small, h6 small { font-size: 60%; color: #6f6f6f; line-height: 0; text-transform: none; }

h1 { font-weight:200; font-size: 44px;}
h2 { font-weight:200; font-size: 37px;}
h3 { font-weight:500; font-size: 27px;}
h4 { font-weight:500; font-size: 23px;}
h5 { font-weight:900; font-size: 17px;}
h6 { font-weight:900; font-size: 14px; text-transform: uppercase; color:#444;}

.collapse { margin:0!important;}

p, ul { 
	margin-bottom: 10px; 
	font-weight: normal; 
	font-size:14px; 
	line-height:1.6;
}
p.lead { font-size:17px; }
p.last { margin-bottom:0px;}

ul li {
	margin-left:5px;
	list-style-position: inside;
}

/* ------------------------------------- 
		SIDEBAR 
------------------------------------- */
ul.sidebar {
	background:#ebebeb;
	display:block;
	list-style-type: none;
}
ul.sidebar li { display: block; margin:0;}
ul.sidebar li a {
	text-decoration:none;
	color: #666;
	padding:10px 16px;
/* 	font-weight:bold; */
	margin-right:10px;
/* 	text-align:center; */
	cursor:pointer;
	border-bottom: 1px solid #777777;
	border-top: 1px solid #FFFFFF;
	display:block;
	margin:0;
}
ul.sidebar li a.last { border-bottom-width:0px;}
ul.sidebar li a h1,ul.sidebar li a h2,ul.sidebar li a h3,ul.sidebar li a h4,ul.sidebar li a h5,ul.sidebar li a h6,ul.sidebar li a p { margin-bottom:0!important;}



/* --------------------------------------------------- 
		RESPONSIVENESS
		Nuke it from orbit. Its the only way to be sure. 
------------------------------------------------------ */

/* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
.container {
	display:block!important;
	max-width:600px!important;
	margin:0 auto!important; /* makes it centered */
	clear:both!important;
}

/* This should also be a block element, so that it will fill 100% of the .container */
.content {
	padding:5px;
	max-width:600px;
	margin:0 auto;
	display:block; 
}

/* Lets make sure tables in the content area are 100% wide */
.content table { width: 100%; }


/* Odds and ends */
.column {
	width: 300px;
	float:left;
}
.column tr td { padding: 15px; }
.column-wrap { 
	padding:0!important; 
	margin:0 auto; 
	max-width:600px!important;
}
.column table { width:100%;}
.social .column {
	width: 280px;
	min-width: 279px;
	float:left;
}

/* Be sure to place a .clear element after each set of columns, just to be safe */
.clear { display: block; clear: both; }


/* ------------------------------------------- 
		PHONE
		For clients that support media queries.
		Nothing fancy. 
-------------------------------------------- */
@media only screen and (max-width: 600px) {
	
	a[class="btn"] { display:block!important; margin-bottom:10px!important; background-image:none!important; margin-right:0!important;}

	div[class="column"] { width: auto!important; float:none!important;}
	
	table.social div[class="column"] {
		width:auto!important;
	}

}    
    
    
</style>
</head>
<body bgcolor="#FFFFFF">
 
<table class="head-wrap">
<tr>
<td class="header container">
<div class="content">

        <p style="color:#B0197E; font-size:40px;">
        CSH
        </p>

</div>
</td>
</tr>
</table>
<table class="body-wrap" style="margin-top:-25px;">
<tr>
<td></td>
<td class="container" bgcolor="#FFFFFF">
<div class="content">
<table>
<tr>
<td>
<h4>New Email</h4>
<p class="lead">
    <b>There is a message from:</b>
    <hr>
    <p><b>Name: '.$name.'</b></p>
    <p><b>Email: </b>'.$email.'</p>
    <p>
    <b>Message:</b>
    
    <br>
    '.$message.'
    </p>
    </p>
 <hr> 
 
<table width="100%">
<tr>
<td>
 
<table align="left">
<tr>
<td>
<p>&copy; Computer Science House 2015. All Rights Reserved.</p>
</td>
</tr>
</table> 
 
</td>
</tr>
</table> 
</td>
</tr>
</table>
</div> 
</td>
<td></td>
</tr>
</table> 
</body>
</html>';
    
//$sendTo = $debugEmail; //Debug - Remove in Prod
    
$to = $sendTo;
$subject = "New Email Message";
$headers = 'From: "CSH Mail Form" <alert@csh.rit.edu>' . "\r\n" .
    'Reply-To: no-reply@csh.rit.edu' . "\r\n" .
    'X-Mailer: PHP/' . phpversion() . "\r\n" . 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers  .= 'MIME-Version: 1.0' . "\r\n";
    
    mail($to, $subject, $message, $headers);
    echo http_response_code(200);

    
    
    
    
    
    
}
else {
    // Unauthorized - Captcha failed
    die(http_response_code(401)); 
    
}






?>