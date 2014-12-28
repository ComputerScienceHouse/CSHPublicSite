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
			Our Sponsors
		</h1>
	</div>
</div>
<div id="content">
	<p class="gridText">
		Computer Science House has been fortunate enough to have a myriad of very generous sponsors. Without their support it would be impossible to learn, grow, and innovate as we do.
	</p>
	<table class="grid" cellspacing="0">
		<tr>
			<td colspan="3" class="largeShow">
				<span>
					<p>Computer Science House has been fortunate enough to have a myriad of very generous sponsors. Without their support it would be impossible to learn, grow, and innovate as we do.</p>
				</span>
			</td>
			<td class="smallShow">
				<a href="http://amdexcorp.com" target="_blank"><img class="testImg" src="images/sponsorLogos/amdex.png" alt="Amdex"/></a>
			</td>
			<td class="smallShow">
				<a href="http://ti.com" target="_blank"><img src="images/sponsorLogos/ti.png" alt="Texas Instruments"/></a>
			</td>
			<td class="smallShow">
				<a href="http://xerox.com" target="_blank"><img src="images/sponsorLogos/xerox.png" alt="Xerox"/></a>
			</td>
			<td>
				<a href="http://symantec.com" target="_blank"><img src="images/sponsorLogos/symantec.png" alt="Symantec"/></a>
			</td>
			<td>
				<a href="http://att.com" target="_blank"><img src="images/sponsorLogos/att.png" alt="AT&T"/></a>
			</td>
		</tr>
		<tr>
			<td>
				<a href="http://dattobackup.com" target="_blank"><img src="images/sponsorLogos/datto.png" alt="Datto"/></a>
			</td>
			<td>
				<a href="http://www.rochester.edu" target="_blank"><img src="images/sponsorLogos/UofR.png" alt="UofR"/></a>
			</td>
			<td>
				<a href="http://linked.in" target="_blank"><img src="images/sponsorLogos/linkedin.png" alt="LinkedIn"/></a>
			</td>
			<td>
				<a href="http://cisco.com" target="_blank"><img src="images/sponsorLogos/cisco.png" alt="Cisco"/></a>
			</td>
			<td>
				<a href="http://microsoft.com" target="_blank"><img src="images/sponsorLogos/microsoft.png" alt="Microsoft"/></a>
			</td>
		</tr>
		<tr>
			<td>
				<a href="http://fxcm.com" target="_blank"><img src="images/sponsorLogos/fxcm.png" alt="FXCM"/></a>
			</td>
			<td>
				<a href="http://google.com" target="_blank"><img src="images/sponsorLogos/google.png" alt="Google"/></a>
			</td>
			<td>
				<a href="http://hp.com" target="_blank"><img src="images/sponsorLogos/hp.png" alt="Hewlett-Packard"/></a>
			</td>
			<td colspan="2" rowspan="2" >
				<a href="http://rit.edu" target="_blank"><img src="images/sponsorLogos/ritLarge.png" alt="RIT"/></a>
				<!--div class="gridDetails">
					<ul>
						<li><a href="http://www.rit.edu/ntid/" target="_blank">National Technical Institute for the Deaf</a></li>
						<li><a href="http://www.rit.edu/" target="_blank">Accounting Department</a></li>
						<li><a href="http://www.cis.rit.edu/" target="_blank">Center for Imaging Science</a></li>
						<li><a href="http://www.rit.edu/cast/" target="_blank">College of Applied Science &amp; Technology</a></li>
						<li><a href="http://www.rit.edu/ENG/" target="_blank">College of Engineering</a></li>
						<li><a href="http://www.rit.edu/studentaffairs/reslife/" target="_blank">Department of Residence Life</a></li>
						<li><a href="http://www.rit.edu/ASC/REG/" target="_blank">Office of the Registrar</a></li>
						<li><a href="http://www.rit.edu/" target="_blank">Physical Plant</a></li>
						<li><a href="http://www.rc.rit.edu/" target="_blank">Research Corporation</a></li>
						<li><a href="http://www.cs.rit.edu/" target="_blank">School of Computer Science</a></li>
						<li><a href="http://www.it.rit.edu/" target="_blank">School of Information Technology</a></li>
						<li><a href="http://cias.rit.edu/printmedia/" target="_blank">School of Print Media</a></li>
					</ul>
				</div-->
			</td>
		</tr>
		<tr>
			<td>
				<a href="http://jnj.com" target="_blank"><img src="images/sponsorLogos/johnsonjohnson.png" alt="Johnson + Johnson"/></a>
			</td>
			<td>
				<a href="http://lourdesinc.com" target="_blank"><img src="images/sponsorLogos/lourdesindustries.png" alt="Lourdes Industries"/></a>
			</td>
			<td>
				<a href="http://mrci.com" target="_blank"><img src="images/sponsorLogos/mooreresearchcenter.png" alt="Moore Research Center"/></a>
			</td>
		</tr>
		<tr>
			<td>
				<a href="http://intergraph.com" target="_blank"><img src="images/sponsorLogos/intergraph.png" alt="Intergraph"/></a>
			</td>
			<td>
				<a href="http://janestreet.com" target="_blank"><img src="images/sponsorLogos/janestreet.png" alt="Jane Street"/></a>
			</td>
			<td>
				<a href="http://nortel.com" target="_blank"><img src="images/sponsorLogos/nortel.png" alt="Nortel"/></a>
			</td>
			<td>
				<a href="http://northropgrumman.com" target="_blank"><img src="images/sponsorLogos/northropgrumman.png" alt="Northrop Grumman"/></a>
			</td>
			<td>
				<a href="http://pt.com" target="_blank"><img src="images/sponsorLogos/pt.png" alt="PT"/></a>
			</td>
		</tr>
		<tr>
			<td>
				<a href="http://oracle.com" target="_blank"><img src="images/sponsorLogos/oracle.png" alt="Oracle"/></a>
			</td>
			<td>
				<a href="http://perforce.com" target="_blank"><img src="images/sponsorLogos/perforce.png" alt="Perforce"/></a>
			</td>
			<td>
				<a href="http://cadence.com" target="_blank"><img src="images/sponsorLogos/cadence.png" alt="Cadence"/></a>
			</td>
			<td>
				<a href="http://podi.org" target="_blank"><img src="images/sponsorLogos/podi.png" alt="PODi"/></a>
			</td>
			<td>
				<a href="http://dupont.com" target="_blank"><img src="images/sponsorLogos/dupont.png" alt="DuPont"/></a>
			</td>
		</tr>
		<tr>
			<td class="smallHide">
				<a href="http://amdexcorp.com" target="_blank"><img class="testImg" src="images/sponsorLogos/amdex.png" alt="Amdex"/></a>
			</td>
			<td class="smallHide">
				<a href="http://ti.com" target="_blank"><img src="images/sponsorLogos/ti.png" alt="Texas Instruments"/></a>
			</td>
			<td class="smallHide">
				<a href="http://xerox.com" target="_blank"><img src="images/sponsorLogos/xerox.png" alt="Xerox"/></a>
			</td>
			<td class="smallHide">
				<a href="http://citrix.com" target="_blank"><img src="images/sponsorLogos/citrix.png" alt="Citrix"/></a>
			</td>
		</tr>
	</table>
</div>
<!-- Handle the Mobile Navigation -->
<script src="jquery-latest.js"></script>
<script src="navController.js"></script>

<?php include "footer.php"; ?>
