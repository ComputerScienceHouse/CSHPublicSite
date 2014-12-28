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
			Traditions
		</h1>
	</div>
</div>
<div id="content">
	<div id="cWrapper">
		<p>
		CSH isn&rsquo;t just about working on projects. Our members love to engage in a variety of social activities. Many of these activities have persisted through the years to become traditions.
		</p>
		<ul class="altList">
		<!--Traditions images should be square and at least 300x300 pixels-->
			<li>
				<img src="images/traditions/camping.jpg" />
				<span>
					<h2>Camping</h2>
					<p>
						Twice a year CSH goes out on an adventure to see if we can survive for a weekend in the wild. Surprisingly, a bunch of computer nerds can thrive without electricity for a few days.
					</p>
				</span>
			</li>

			<li>
				<img src="images/traditions/freshmen-proj.jpg" />
				<span>
					<h2>Freshman Project</h2>
					<p>
						Every year the introductory members of CSH plan and host a charity event. The events range from simple bake sales to video game tournaments and are always a blast to put on.
					</p>
				</span>
			</li>

			<!--li>
				<img src="images/traditions/" />
				<span>
					<h2>Grad Party</h2>
					<p>
						At the end of every year, we hold a celebration to congratulate our graduating members. Each member receives an engraved mug filled with their favorite (non-alcoholic) beverage as the rest of us tell funny stories about them.
					</p>
				</span>
			</li-->

			<li>
				<img src="images/traditions/holiday-dinner.jpg" />
				<span>
					<h2>Holiday Dinner</h2>
					<p>
						Holiday Dinner is our annual formal dinner that takes place right before Winter Break. All of CSH gets dressed up and has dinner at a classy restaurant. This is immediately followed by another traditional event, Secret Santa, in which anonymous (and often hilarious) gifts are exchanged.
					</p>
				</span>
			</li>

			<li>
				<img src="images/traditions/intramurals.jpg"/>
				<span>
					<h2>Intramural Sports</h2>
					<p>
						We participate in most of the intramural sports RIT offers, including hockey, soccer, basketball, softball, dodgeball, and volleyball. While we aren&rsquo;t always the best team out there, we&rsquo;re always the best-looking (with our CSH jerseys) and have the most fans cheering us on! We&rsquo;ve even won quite an impressive number of trophies in the past, which are proudly displayed in our library.
					</p>
				</span>
			</li>

			<li>
				<img src="images/traditions/netrek.jpg"/>
				<span>
					<h2>Netrek</h2>
					<p>
						On Friday nights throughout the year, we invade the Computer Science labs to play an old game called Netrek. In this online team-play game from the 80&rsquo;s, you control a ship flying through space, conquering planets and destroying your foes with a sophisticated array of weapons and countermeasures. Superior strategy and coordination will propel your team to victory!
					</p>
				</span>
			</li>

			<li>
				<img src="images/traditions/seminar.jpg"/>
				<span>
					<h2>Seminars</h2>
					<p>
						Any member can hold a seminar to teach others a bit about a topic of their choosing. Subjects can range from programming to juggling and everything in between and anyone can give one at any time.
					</p>
				</span>
			</li>

			<li>
				<img src="images/traditions/welcome-back.jpg"/>
				<span>
					<h2>Welcome Back</h2>
					<p>
						Welcome Back is a barbecue held at the beginning of each year to welcome the incoming freshman class. Traditionally, alumni come from far and wide to visit current floor members. We cook way too much food, tell stories, and participate in a variety of outdoor activities.
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