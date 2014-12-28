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
			About CSH
		</h1>
	</div>
</div>
<div id="content">
	<p id="aboutp">
		<img id="first" src="images/ryan-brown.jpg" width="400" height="300" />
		Computer Science House, founded in 1976, is one of the oldest and most active Special Interest Houses at Rochester Institute of Technology in Rochester, NY. Located on the third floor of the Nathaniel Rochester Hall dormitory, CSH provides a revolutionary living environment for over fifty on-floor students and many off-floor members as well.
		<br /><br />
		In addition to RIT's standard residence hall facilities, CSH has several unique, multi-purpose rooms, filled with technical and material resources for members to use. CSH's computing resources include e-mail, newsgroups, database and web space services, our own wired network, and a multitude of servers and workstations - all maintained and operated by members. Hands-on learning is emphasized in order to give members a significant advantage in the professional world.
		<br /><br />
		CSH is an exciting place to live and learn. There are always fun things to do, interesting projects to work on, and members who are eager to lend their expertise in a wide variety of subjects. Members share a feeling of kinship, belonging and commitment to each other and the floor. The atmosphere on floor is equal parts academic and social.
		<br /><br />
		<img id="second" src="images/house-group.jpg" width="400" height="267" />
		CSH organizes annual events Welcome Back, Halloween and Holiday Dinner parties. Other events such as educational seminars, study jams, stress-reliever luncheons, programming marathons, movie nights, Capture the Disk, Taste of Rochester, road trips and bowling nights occur frequently. Members also play intramural sports such as volleyball, dodge ball, soccer, and broomball together.
		<br /><br />
		While much has changed over the years, CSH's mission to help its members grow intellectually, socially, and professionally continues to succeed and surpass expectations.
	</p>
</div>
<!-- Handle the Mobile Navigation -->
<script src="jquery-latest.js"></script>
<script src="navController.js"></script>
<?php include "footer.php"; ?>