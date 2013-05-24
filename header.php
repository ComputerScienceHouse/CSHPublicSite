<?php
	function calledFrom() {
		$fileList = get_included_files();
		$parent = basename($fileList[0],'.php');
		return $parent;
	}
?>

<!DOCTYPE HTML>
<html>
	<head>
		<title>Computer Science House</title>
		<meta name="viewport" content="initial-scale=0.5">
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="general.css">
		<link rel="stylesheet" type="text/css" href="pages.css">
		<link rel="stylesheet" type="text/css" href="queries.css">
		<link href='//fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="smoothscroll.js"></script>
		<script type="text/javascript" src="detectmobile.js"></script>
		<?php if (calledFrom() == "index" || calledFrom() == "sponsors" || calledFrom() == "tour" || calledFrom() == "alumni") { ?>
			<script src="jquery-latest.js"></script>
			<script type="text/javascript" src="code.js"></script>
		<?php } ?>
		<?php if (calledFrom() == "index") { ?>
			<script src="fittext.js"></script>
		<?php } ?>
		<?php if (calledFrom() == "tour") { ?>
			<script src="responsiveslides.min.js"></script>
			<link rel="stylesheet" type="text/css" href="responsiveslides.css">
		<?php } ?>
		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-40309079-1', 'rit.edu');
			ga('send', 'pageview');
		</script>
	</head>
	<body>
		<div id="header">
			<div class="wrapper">
				<a href="./">
					<img src="images/logo.png" alt="Computer Science House" width="117" height="50"/>
				</a>
				<ul id="nav">
					<li>
						<a href="./" <?php if (calledFrom() == "index") { ?>class="selected"<?php } ?> >Home</a>
					</li>
					<li>
						<a href="about.php" <?php if (calledFrom() == "about") { ?>class="selected"<?php } ?>>About</a>
	 					<ul>
							<li>
								<a href="projects.php">Projects</a>
							</li>
							<li>
								<a href="alumni.php">Alumni</a>
							</li>
							<li>
								<a href="eboard.php">Eboard</a>
							</li>
							<li>
								<a href="tour.php">Tour</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="membership.php" <?php if ( calledFrom() == "membership") { ?>class="selected"<?php } ?>>Membership</a>
						<ul>
							<li>
								<a href="traditions.php">Traditions</a>
							</li>
							<li>
								<a href="scholarship.php">Scholarship</a>
							</li>
						</ul>
					</li>
					<li >
						<a href="contact.php" <?php if ( calledFrom() == "contact") { ?>class="selected"<?php } ?>>Contact</a>
					</li>
				</ul>
				<a href="#footer" class="selected" id="mobilenav">Navigation &#9662;</a>
			</div>
		</div>
