//Sponsors gallery
function shuffle(o) {
	for(var j, x, i = o.length; 
		i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function swapImage() {
	choice = Math.floor(Math.random()*images.length);
	$('#row').html('<IMG SRC="' + images[choice] + '">');
}

$(document).ready(function() {
	//Sponsors gallery
	images = new Array(
		"<a href='http://att.com' target='_blank'><img src='images/sponsorLogos/att.png'></a>", 
		"<a href='http://linked.in' target='_blank'><img src='images/sponsorLogos/linkedin.png'></a>",
		"<a href='http://ge.com' target='_blank'><img src='images/sponsorLogos/ge.png'></a>",
		"<a href='http://cisco.com' target='_blank'><img src='images/sponsorLogos/cisco.png'></a>", 
		"<a href='http://google.com' target='_blank'><img src='images/sponsorLogos/google.png'></a>", 
		"<a href='http://jnj.com' target='_blank'><img src='images/sponsorLogos/johnsonjohnson.png'></a>",
		"<a href='http://symantec.com' target='_blank'><img src='images/sponsorLogos/symantec.png'></a>", 
		"<a href='http://xerox.com' target='_blank'><img src='images/sponsorLogos/xerox.png'></a>",
		"<a href='http://dattobackup.com' target='_blank'><img src='images/sponsorLogos/datto.png'></a>",
		"<a href='http://www.rochester.edu' target='_blank'><img src='images/sponsorLogos/UofR.png'></a>",
		"<a href='http://microsoft.com' target='_blank'><img src='images/sponsorLogos/microsoft.png'></a>");
	shuffle(images);
	$('#row').append(images[0], images[1], images[2], images[3], images[4]);

	//fit grid paragraph to image height
	$(".grid img").load(function(){
		$(".largeShow span").height($(".testImg").height());
		$(".largePerm span").height($(".testImg").height());
	});
	$(window).resize(function() {
		$(".largeShow span").height($(".testImg").height());
		$(".largePerm span").height($(".testImg").height());
	});
});

//Preload footer hover images
document.addEventListener("DOMContentLoaded", function() { 
	var images = new Array(
		"https://www.csh.rit.edu/images/twitter-green.png", 
		"https://www.csh.rit.edu/images/facebook-green.png", 
		"https://www.csh.rit.edu/images/github-green.png"); 
	for (var i = 0; i < images.length; i++) { new Image().src=images[i]; } 
});
