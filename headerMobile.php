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
		<meta name="viewport" content="initial-scale=0.5, user-scalable=no">
		<meta charset="UTF-8">
		<link rel="icon" href="images/favicon.ico">
        <link rel="stylesheet" type="text/css" href="bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="general.css">
        <link rel="stylesheet" type="text/css" href="mobileNav.css">
		<link rel="stylesheet" type="text/css" href="pages.css">
		<link rel="stylesheet" type="text/css" href="queries.css">
		<link href='http://fonts.googleapis.com/css?family=Oxygen' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="smoothscroll.js"></script>
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
		<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-75959-4']);
  _gaq.push(['_setDomainName', 'csh.rit.edu']);
  _gaq.push(['_setAllowLinker', true]);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
	</head>
	<body>
        <div class="nav-header">
        
        	<div class="main-logo">
        		<a href="./">
					<img src="images/logo-green.png" alt="Computer Science House" width="80" height="80"/> 
				</a>
        	</div>
        	<div class="dropdown-icon-container">
        		<button id="dropdownIcon"><i class=" fa fa-bars dropdown-icon"></i>
                </button>
        	</div>
        
        </div>
        <span id="dropdownMenu">
		
        </span>