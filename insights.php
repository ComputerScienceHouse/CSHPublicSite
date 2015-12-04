<?php include "header.php"; ?>
<div id="big" class="title">
	<div class="wrapper">
		<h1>
			CSH Insights
		</h1>
	</div>
</div>
<div id="content">
	<div id="cWrapper">
		<div id="insights_header">
			<img src="images/insights/header.jpg" alt="Insights Header"/>
		</div>
		<p>
			Insights is a promotional program where prospective students have the option to spend a weekend at Computer Science House. As the name would suggest,
			Insights gives students a real, first-hand experience of campus life the likes of which no tour guide can convey. Students will spend a weekend hosted
			by members of CSH, a Special Interest Floor dedicated to students interested in computing. They will have to opportunity to participate in learning
			workshops hosted by house members, join in on CSH traditions like Capture the Disk, and much more.
		</p>
		<div id="insights_button_wrapper">
		<a href="http://csh.rit.edu/~mbillow/insights/1015InsightsSchedule.pdf">
			<div id="insights_button">Schedule</div>
		</a>
		<a href="https://form.jotform.com/52914750434152">
			<div id="insights_button">Registration Form</div>
		</a>
		<?php require_once('hide_email.php'); ?>
		<?php echo hide_email("insights@csh.rit.edu", true, '<div id="insights_button">Contact Us</div>'); ?>
	</div>
	</div>
</div>
<?php include "footer.php"; ?>
