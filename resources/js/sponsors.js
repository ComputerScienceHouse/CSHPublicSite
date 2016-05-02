//sponsors.js
// Handles the swapping of sponsor images on the homepage

$(document).ready(function(){
    var images = [
        'resources/images/sponsorLogos/ritLarge.png',
        'resources/images/sponsorLogos/symantec.png',
        'resources/images/sponsorLogos/att.png',
        'resources/images/sponsorLogos/datto.png',
        'resources/images/sponsorLogos/UofR.png',
        'resources/images/sponsorLogos/linkedin.png',
        'resources/images/sponsorLogos/microsoft.png',
        'resources/images/sponsorLogos/cisco.png',
        'resources/images/sponsorLogos/google.png',
        'resources/images/sponsorLogos/hp.png',
        'resources/images/sponsorLogos/johnsonjohnson.png',
        'resources/images/sponsorLogos/lourdesindustries.png',
        'resources/images/sponsorLogos/mooreresearchcenter.png',
        'resources/images/sponsorLogos/intergraph.png',
        'resources/images/sponsorLogos/nortel.png',
        'resources/images/sponsorLogos/janestreet.png',
        'resources/images/sponsorLogos/northropgrumman.png',
        'resources/images/sponsorLogos/sonus.png',
        'resources/images/sponsorLogos/oracle.png',
        'resources/images/sponsorLogos/perforce.png',
        'resources/images/sponsorLogos/cadence.png',
        'resources/images/sponsorLogos/podi.png',
        'resources/images/sponsorLogos/dupont.png',
        'resources/images/sponsorLogos/amdex.png',
        'resources/images/sponsorLogos/ti.png',
        'resources/images/sponsorLogos/xerox.png',
        'resources/images/sponsorLogos/citrix.png',
        'resources/images/sponsorLogos/fxcm.png',
        'resources/images/sponsorLogos/pdhi.png' 
    ];
    
    for(i=0;i<29;i++){
        var index = Math.floor(Math.random()*images.length)
        var item = images[index];
        $('#sponsor'+i).attr("src", item);
        images.splice(index,1);
        
        
        
        
    }
    
    
    
});
