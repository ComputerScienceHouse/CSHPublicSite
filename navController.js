/*
file: navController.js
description: Handles the visibility of the navigation dropdown div


*/
var active = 0;
	$('#dropdownIcon').on("click", function(){
		if (active == 0){
			document.getElementById('dropdownMenu').innerHTML = '<div class="dropdown-menu-container"> <ul id="navMobile"><li><a href="./" >Home</a></li><li><a href="about.php" >About</a> <ul><li><a href="projects.php">Projects</a></li><li><a href="alumni.php">Alumni</a></li><li><a href="eboard.php">Eboard</a></li></ul></li><li><a href="membership.php">Membership</a><ul><li><a href="traditions.php">Traditions</a></li><li><a href="tour.php">Tour</a></li><!--<li><a href="scholarship.php">Scholarship</a></li>--></ul></li><li ><a href="contact.php" >Contact</a></li></ul> </div>'	;
			active = 1;
		}
		else if(active == 1){
			document.getElementById('dropdownMenu').innerHTML = ''	;
			active = 0;
			
		}
		
		
		
	});