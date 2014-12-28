<?php 
include 'Mobile_Detect.php';
$device = new Mobile_Detect;
if ($device->isMobile()) {
    include 'headerMobile.php';
}
else{
	include 'header.php';	
}

?>
<div id="big" class="toptitle">
	<div class="topwrapper">
		<h1>
			Thank You!
		</h1>
	</div>
</div>
<div id="content">
	<img src="images/happyjr.png" alt="Happy PC Junior" width="274" height="314" class="center"/>
	<h1 class="center">Thank you for your input!</h1>
	<p class="center">
	We will do our best to respond to
	<br/>
	you as soon as possible.
	</p>
</div>
<!-- Handle the Mobile Navigation -->
<script src="jquery-latest.js"></script>
<script src="navController.js"></script>

<?php include "footer.php"; ?>