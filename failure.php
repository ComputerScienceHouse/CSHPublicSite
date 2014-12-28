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
			Uh-oh!
		</h1>
	</div>
</div>
<div id="content">
	<img src="images/sadjr.png" alt="Sad PC Junior" width="274" height="314" class="center"/>
	<h1 class="center">Failed to send email!</h1>
	<p class="center">
		Something went wrong. Please try again!
	</p>
</div>
<!-- Handle the Mobile Navigation -->
<script src="jquery-latest.js"></script>
<script src="navController.js"></script>

<?php include "footer.php"; ?>