<?php include "header.php"; ?>
<div id="big" class="title">
	<div class="wrapper">
		<h1>
			Contact Us
		</h1>
	</div>
</div>
<div id="content">
	<div id="contact">
		<div id="contact-info">
			<p>
				<b>Computer Science House</b><br/>
				3999 Nathaniel Rochester Hall<br/>
				Rochester, NY 14623<br/>
				<br/>
				<b>Chairman:</b> chairman&#64;csh.rit.edu<br/>
				<b>Membership:</b> eval&#64;csh.rit.edu<br/>
				<b>Alumni Contact:</b> history&#64;csh.rit.edu<br/>
				<b>Scholarship:</b> scholarship&#64;csh.rit.edu<br/>
				<b>Webmaster:</b> webmaster&#64;csh.rit.edu<br/>
			</p>
		</div>
		<form id="contact-form" action="mail_form.php" method="post">
			<input class="input" type="text" name="f1" placeholder="Name" required="required" data-message="*"/>
			<br/>
			<input class="input" type="text" name="f2" placeholder="Email Address" required="required" data-message="*"/>
			<br/>
			<select class="select" id="select_email" name="sendtoemail">
				<option value="chairman@csh.rit.edu">Chairman</option>
				<option value="eval@csh.rit.edu">Evaluations</option>
				<option value="history@csh.rit.edu">History</option>
				<option value="scholarship@csh.rit.edu">Scholarship</option>
				<option value="webmaster@csh.rit.edu">Webmaster</option>
			</select>
			<br/>
			<textarea class="textarea" rows="5"  name="f3" cols="20" placeholder="Message" required="required" data-message="*"></textarea>
			<br/>
			<?php
	          require_once('recaptchalib.php');
	          $publickey = "6LdMJeISAAAAAHnVuAK_3wMCEcOidQ_09yw0h-4a";
	          echo recaptcha_get_html($publickey);
	        ?>
	        <script type="text/javascript"> 
	        	(function() {
	        		document.getElementById("recaptcha_response_field").setAttribute("required","required");
	        	})();
	        </script>
	        <br/>
			<input class="input" type="submit" id="submit-button" value="Send"/>
		</form>
	</div>
</div>
<?php include "footer.php"; ?>
