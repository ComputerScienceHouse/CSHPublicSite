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
			Our Projects
		</h1>
	</div>
</div>
<div id="content">
	<div id="cWrapper">
		<p>
			Projects are an integral part of the living, learning experience at Computer Science House. This is a small sample of our notable projects that our members have created:
		</p>
		<ul class="altList">
			<li>
				<img src="images/projects/drink.jpg" />
				<span>
					<h2>Drink/Snack</h2>
					<p>
						Drink and snack are two of CSH's oldest projects. Networked vending machines allow members to order items from any internet browser using a credits system. A timer can also be specified to delay the release of a purchased item.
					</p>
				</span>
			</li>
			<li>
				<img src="images/projects/raspi.jpg" />
				<span>
					<h2>One Project Per Freshman</h2>
					<p>
						Currently in its first year of operation, One Project Per Freshman looks to put the necessary tools in the hands of freshman to enable them to learn more about hardware electronics projects without a financial investment on their part. In its current form, an incoming freshman member would be given the choice between a Raspberry Pi or a Arduino with a starter kit to tinker with throughout the year.
					</p>
				</span>
			</li>
			<li>
				<img src="images/projects/schedulemaker.jpg" />
				<span>
					<h2><a href="http://schedule.csh.rit.edu/" target="_blank">Schedule Maker</a></h2>
					<p>
						<a href="http://schedule.csh.rit.edu/" target="_blank">Schedule Maker</a> allows RIT students to plan their schedule for upcoming semesters. Users simply enter their course numbers and custom events and a list of all schedules that match their parameters will be shown. Because it is so easy and simple, Schedule Maker is now used by over 90% of RIT students.
					</p>
				</span>
			</li>
			<li>
				<img src="images/projects/arcade.jpg" />
				<span>
					<h2>CSH Arcade</h2>
					<p>
						Two CSH members built this arcade cabinet from scratch. It emulates many classic arcade games from varying consoles and supports multiplayer. A second cabinet featuring a cusom-made platforming game was also built. Both machines, along with other arcade cabinets CSH has acquired, are housed in our Library.
					</p>
				</span>
			</li>
			<li>
				<img src="images/projects/harold.jpg" />
				<span>
					<h2>Harold</h2>
					<p>
						With Harold, every member of CSH gets their own personal theme song. Audio clips can be uploaded and selected via a simple web interface and are played when a user touches their iButton (received upon membership) to an appropriate reader.
					</p>
				</span>
			</li>
			<li>
				<img src="images/projects/infosys.jpg" />
				<span>
					<h2>InfoSys</h2>
					<p>
						InfoSys is a multi-purpose display board located in our User Center. It is capable of displaying weather statistics, custom messages, and even real-time player data from video games.
					</p>
				</span>
			</li>
		</ul>
	</div>
</div>
<!-- Handle the Mobile Navigation -->
<script src="jquery-latest.js"></script>
<script src="navController.js"></script>

<?php include "footer.php"; ?>
