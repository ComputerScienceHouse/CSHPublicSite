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
			Executive Board
		</h1>
	</div>
</div>
<div id="content">
	<div id="cWrapper">
		<p>
		The CSH Executve Board, or <b>E-Board</b>, is a group of directors who manage all aspects of House's affairs. Through weekly meetings and active involvement on floor, the E-Board members keep CSH running smoothly.
		</p>
		<ul class="altList">
		<!--Eboard images should be square and at least 300x300 pixels-->
			<li>
				<div class="rolloverImg" id="chairmanImg"><img src="images/eboard/chairman.jpg" /></div>
				<span>
					<h2>Chairman</h2>
					<h3>Jeff Haak</h3>
					<p>
						The Chairman of CSH serves as the head of E-Board, supervising the activities of the directors and presiding over our weekly house meetings. The Chairman is also the primary spokesperson for the House, representing the interests of our members in communications with RIT and the rest of the world.
					</p>
				</span>
			</li>

			<li>
				<div class="rolloverImg" id="evalsImg"><img src="images/eboard/evals.jpg" /></div>
				<span>
					<h2>Evaluations</h2>
					<h3>Tal Cohen</h3>
					<p>
						The Evaluations director (Eval) is responsible for connecting with the RIT student community, as well as screening, accepting, and orienting new members. Eval is why current members are here today!
						<br/><br/>
						If you would like to visit or tour the floor, let the Eval Director know and he can arrange this.
				</p>
				</span>
			</li>

			<li>
				<div class="rolloverImg" id="financialImg"><img src="images/eboard/financial.jpg" /></div>
				<span>
					<h2>Financial</h2>
					<h3>Derek Gonyeo</h3>
					<p>
						The Financial director is responsible for managing CSH's finances, collecting semesterly member dues, and hatching new fundraising schemes. All of our money goes towards new resources and project components for members to use; CSH is a registered non-profit organization with an annual self-generated budget.
					</p>
				</span>
			</li>

			<li>
				<div class="rolloverImg" id="historyImg"><img src="images/eboard/history.jpg" /></div>
				<span>
					<h2>House History</h2>
					<h3>Matt Gambogi</h3>
					<p>
						The primary responsibility of the History director (History) is keeping the line of communication between CSH and our alumni open. We believe members should have a well-developed sense of House's origins and accomplishments. History keeps the past alive through the yearbook, Coredump newsletter, floor displays, archiving, updating the media database, and managing alumni relations. History also coordinates alumni storytelling nights and other traditional events.
					</p>
				</span>
			</li>

			<li>
				<div class="rolloverImg" id="impsImg"><img src="images/eboard/imps.jpg" /></div>
				<span>
					<h2>House Improvements</h2>
					<h3>Michael Lynch</h3>
					<p>
						The House Improvements (Imps) director is responsible for keeping our living space respectable and comfortable. The Imps director delegates projects that improve the physical aspects of floor, such as painting, cleaning, building, and organizing House's resources. While we may not be the tidiest group of people, we like to take care of our floor, and it shows.
					</p>
				</span>
			</li>

			<li>
				<div class="rolloverImg" id="opCommImg"><img src="images/eboard/opcomm.jpg" /></div>
				<span>
					<h2>OpComm</h2>
					<h3>Josh McSavaney</h3>
					<p>
						The OpComm director, together with a group of technically skilled members known as RTPs, is responsible for maintaining CSH's servers and network infrastructure. Becoming an RTP allows members to develop and practice skills that are essential for working in computing fields. If you have any questions about House's technical resources, the OpComm director should be your first stop.
					</p>
				</span>
			</li>

			<li>
				<div class="rolloverImg" id="rdImg"><img src="images/eboard/rd.jpg" /></div>
				<span>
					<h2>Research and Development</h2>
					<h3>Travis Whitaker</h3>
					<p>
						R&amp;D is responsible for organizing seminars and assisting with technical projects, with the goal of encouraging members to learn new skills and gain experience.
					</p>
				</span>
			</li>

			<li>
				<div class="rolloverImg" id="socialImg"><img src="images/eboard/social.jpg" /></div>
				<span>
					<h2>Social</h2>
					<h3>Joe Gambino &amp; Jackie McGraw </h3>
					<p>
						The Social directors (Social) are responsible for planning and running social events for our members, such as diner runs, movie nights, project work weekends, and more.
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
