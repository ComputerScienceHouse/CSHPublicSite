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
			CSH Scholarship Fund
		</h1>
	</div>
</div>
<div id="content">
	<div id="cWrapper">
		<p>Visit our page on <a href="http://www.alumnifidelity.com/RITComputerScienceHouse.html" target="_blank">Alumni Fidelity</a> to donate using a credit card, or write a check to RIT with the memo "Computer Science House Scholarship Fund".</p>
		<br/>

		<h2>Our Mission</h2>
		<p>To create a scholarship that would provide a second-year or higher Computer Science House member with assistance for continuing attendance at RIT and active membership in Computer Science House. The scholarship will be funded by alumni, friends of CSH, and businesses that are willing to donate funds. Scholarship funds would be kept separate from the main CSH bank account.</p>
		<br/>

		<h2>Eligibility</h2>
		<p>Recipients will be full-time undergraduate students enrolled in any program at RIT, in good academic standing, with demonstrated financial need and membership in Computer Science House. Preference will be for upperclass students (sophomore level or higher).</p>
		<br/>

		<h2>Contact</h2>
		<p>Email <a href="contact.php">scholarship@csh.rit.edu</a> with any questions about the Scholarship Fund.</p>
		<br/>

		<h2>FAQ</h2>
		<p><b>Is this a long-term committment?</b>
		<br/>
		No. As with any charity-funded program, the success of the Scholarship Fund is entirely dependent on the good will of donors year after year. We recognize that financial situations change and a big donor one year may not be able to donate on an ongoing basis. We thank you for your support, no matter the amount.
		<br/><br/>
		<b>Will RIT solicit additional donations from me?</b>
		<br/>
		It is likely; however, you can always choose whether to donate and where your money goes. If you designate a donation to go towards this scholarship fund, your money will go to an eligible CSH member. You do have the ability to stop all solicitations from RIT.
		<br/><br/>
		<b>Is this program connected to the RIT Alumni Association?</b>
		<br/>
		Yes. Running this program through the Alumni Association allows us to make all donations tax-deductible.
	</div>
</div>
<!-- Handle the Mobile Navigation -->
<script src="jquery-latest.js"></script>
<script src="navController.js"></script>

<?php include "footer.php"; ?>