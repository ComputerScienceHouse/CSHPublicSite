		<div id="footer"><div class="wrapper">
			<ul id="sm">
				<li>
					<h3>Site Map</h3>
				</li>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/40th.php">40th Information</a>
				</li>
				<li>
					<a href="/about.php">About</a>
					<ul>
						<li>
							<a href="/projects.php">Projects</a>
						</li>
						<li>
							<a href="/alumni.php">Alumni</a>
						</li>
						<li>
							<a href="/eboard.php">Eboard</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="/membership.php">Membership</a>
					<ul>
						<li>
							<a href="/traditions.php">Traditions</a>
						</li>
						<li>
							<a href="/tour.php">Tour</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="/contact.php">Contact</a>
				</li>
				<li>
					<a href="/sponsors.php">Sponsors</a>
				</li>
			</ul>
			<ul id="pr">
				<li>
					<h3>Public Resources</h3>
				</li>
				<li>
					<a href="/membership.php">How to Apply</a>
				</li>
				<li>
					<a href="http://schedule.csh.rit.edu/" target="_blank">CSH RIT Schedule Maker</a>
				</li>
				<li>
					<a href="https://github.com/ComputerScienceHouse" class="github" target="_blank">CSH on GitHub</a>
				</li>
				<li>
					<a href="https://twitter.com/CSH_History" target="_blank" class="twitter">@CSH_History</a>
				</li>
			</ul>
			<ul id="mr">
				<li>
					<h3>Member Resources</h3>
				</li>
				<li>
					<a href="http://members.csh.rit.edu" target="_blank">Members' Portal</a>
				</li>
				<li>
					<a href="https://github.com/ComputerScienceHouse/Constitution/blob/master/articles.pdf?raw=true">Constitution</a>
				</li>
				<li>
					<a href="https://github.com/ComputerScienceHouse/Constitution/blob/master/bylaws.pdf?raw=true">By-laws</a>
				</li>
				<li>
					<a href="https://www.facebook.com/groups/ComputerScienceHouse/" target="_blank" class="facebook">CSH on Facebook</a>
				</li>
				<li>
					<a href="https://twitter.com/OPCOMM" target="_blank" class="twitter">@OPCOMM</a>
				</li>
			</ul>
			<span id="stretch"></span>
		</div></div>
		<div class="wrapper">
			<div id="under">
				<p>
					<?php require_once('hide_email.php'); ?>
					<a href="/contact.php"><?php echo hide_email("webmaster@csh.rit.edu", false); ?></a>
				</p>
				<p>
					<a href="https://github.com/computersciencehouse/CSHPublicSite">Website on Github</a>
				</p>
				<p>
					Copyright <?php echo date("Y"); ?> &copy; Computer Science House
				</p>
			</div>
		</div>
	</body>
</html>
