<?php include "header.php"; ?>
<div id="big">
	<div class="wrapper">
		<div id="left">
			<p id="fitText">
				Getting more done after 2<span class="smallCaps">am</span> than most people do all day.
			</p>
		</div>
	</div>
</div>
<div id="content">
	<div id="split">
		<div id="about">
			<h3>
				<a href="about.php" class="green">About CSH</a>
			</h3>
			<p>
				Since 1976, Computer Science House has provided a revolutionary living and learning environment for its members. With unique facilities, emphasis on hands-on learning, and a strong social atmosphere, CSH helps its members grow as professionals and more.
			</p>
		</div>
		<div id="projects">
			<h3>
				<a href="projects.php" class="green">Things we've done</a>
			</h3>
			<img src="images/projects/arcade.jpg" alt="CSH Arcade Cabinet" />
			<img src="images/projects/drink.jpg" alt="Drink" />
			<img src="images/projects/infosys.jpg" alt="Infosys" />
			<img src="images/projects/schedulemaker.jpg" alt="Schedule Maker" />
			<p>
				Personal projects are a big part of CSH culture. Some of our biggest include CSH Arcade, Drink, InfoSys, and Schedule Maker.
			</p>
		</div>
	</div>
	<div id="sponsors">
		<div id="hr"></div>
		<h3>
			<a href="sponsors.php" class="green">Sponsors</a>
		</h3>
		<div id="row">
			<noscript>
				<a href="http://oracle.com">
					<img src="images/sponsorLogos/oracle.png" alt="Oracle">
				</a>
				<a href="http://ti.com">
					<img src="images/sponsorLogos/ti.png" alt="Texas Instruments">
				</a>
				<a href="http://jnj.com">
					<img src="images/sponsorLogos/johnsonjohnson.png" alt="Johnson & Johnson">
				</a>
				<a href="http://symantec.com">
					<img src="images/sponsorLogos/symantec.png" alt="Symantec">
				</a>
				<a href="http://google.com">
					<img src="images/sponsorLogos/google.png" alt="Google">
				</a>
			</noscript>
		</div>
	</div>
</div>
<script>
	//Fit slogan to container
	$('#fitText').fitText(1.25, {minFontSize:24});
</script>
<?php include "footer.php"; ?>
