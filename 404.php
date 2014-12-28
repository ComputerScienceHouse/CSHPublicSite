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
<div id="big">
	<div class="topwrapper">
		<div id="left">
			<p id="fitText">
				404: Not Found
			</p>
<iframe width="50%" height="315" src="//www.youtube.com/embed/t3otBjVZzT0?controls=0&showinfo=0" frameborder="0" allowfullscreen></iframe>
		</div>
	</div>
</div>
<!-- Handle the Mobile Navigation -->
<script src="jquery-latest.js"></script>
<script src="navController.js"></script>
<!-- Text Sizing -->
<script>
	$('#fitText').fitText(1.25, {minFontSize:24});
</script>
<?php include "footer.php"; ?>
