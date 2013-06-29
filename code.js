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
		"<a href='http://khanacademy.org' target='_blank'><img src='images/alumniLogos/khanacademy.png' alt='Khan Academy'/></a>", 
		"<a href='http://cisco.com' target='_blank'><img src='images/sponsorLogos/cisco.png'></a>", 
		"<a href='http://google.com' target='_blank'><img src='images/sponsorLogos/google.png'></a>", 
		"<a href='http://hp.com' target='_blank'><img src='images/sponsorLogos/hp.png'></a>", 
		"<a href='http://jnj.com' target='_blank'><img src='images/sponsorLogos/johnsonjohnson.png'></a>",
		 "<a href='http://oracle.com' target='_blank'><img src='images/sponsorLogos/oracle.png'></a>",
		  "<a href='http://symantec.com' target='_blank'><img src='images/sponsorLogos/symantec.png'></a>", 
		  "<a href='http://ti.com' target='_blank'><img src='images/sponsorLogos/ti.png'></a>", 
		  "<a href='http://xerox.com' target='_blank'><img src='images/sponsorLogos/xerox.png'></a>");
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
		"http://www.csh.rit.edu/images/twitter-green.png", 
		"http://www.csh.rit.edu/images/facebook-green.png", 
		"http://www.csh.rit.edu/images/github-green.png"); 
	for (var i = 0; i < images.length; i++) { new Image().src=images[i]; } 
});
