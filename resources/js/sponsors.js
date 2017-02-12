//sponsors.js
// Handles the swapping of sponsor images on the homepage

$(document).ready(function(){
    var images = [
        ['resources/images/sponsorLogos/ritLarge.png', "http://rit.edu"],
        ['resources/images/sponsorLogos/symantec.png', "http://symantec.com" ],
        ['resources/images/sponsorLogos/att.png', "http://att.com" ],
        ['resources/images/sponsorLogos/datto.png', "http://datto.com" ],
        ['resources/images/sponsorLogos/UofR.png', "http://rochester.edu" ],
        ['resources/images/sponsorLogos/linkedin.png', "http://linkedin.com" ],
        ['resources/images/sponsorLogos/microsoft.png', "http://microsoft.com" ],
        ['resources/images/sponsorLogos/cisco.png', "http://cicso.com" ],
        ['resources/images/sponsorLogos/google.png', "http://google.com" ],
        ['resources/images/sponsorLogos/hp.png', "http://hp.com" ],
        ['resources/images/sponsorLogos/johnsonjohnson.png', "http://jnj.com" ],
        ['resources/images/sponsorLogos/lourdesindustries.png', "http://lourdesinc.com" ],
        ['resources/images/sponsorLogos/mooreresearchcenter.png', "http://mrci.com" ],
        ['resources/images/sponsorLogos/intergraph.png', "http://intergraph.com" ],
        ['resources/images/sponsorLogos/nortel.png', "http://nortel-us.com" ],
        ['resources/images/sponsorLogos/janestreet.png', "http://janestreet.com" ],
        ['resources/images/sponsorLogos/northropgrumman.png', "http://northropgrumman.com" ],
        ['resources/images/sponsorLogos/sonus.png', "http://sonus.net" ],
        ['resources/images/sponsorLogos/oracle.png', "http://oracle.com" ],
        ['resources/images/sponsorLogos/perforce.png', "http://perforce.com" ],
        ['resources/images/sponsorLogos/cadence.png', "http://cadence.com" ],
        ['resources/images/sponsorLogos/podi.png', "http://podi.com" ],
        ['resources/images/sponsorLogos/dupont.png', "http://dupont.com" ],
        ['resources/images/sponsorLogos/amdex.png', "http://amdexcorp.com" ],
        ['resources/images/sponsorLogos/ti.png', "http://ti.com" ],
        ['resources/images/sponsorLogos/xerox.png', "http://xerox.com" ],
        ['resources/images/sponsorLogos/citrix.png', "http://citrix.com" ],
        ['resources/images/sponsorLogos/fxcm.png', "http://fxcm.com" ],
        ['resources/images/sponsorLogos/pdhi.png', "http://pdhi.com" ],
        ['resources/images/sponsorLogos/datadog.png', "http://www.datadoghq.com/" ],
        ['resources/images/sponsorLogos/dmarcian.svg', "http://dmarcian.com/" ],
        ['resources/images/sponsorLogos/pritunl.png', "https://pritunl.com/" ],
        ['resources/images/sponsorLogos/sentry.svg', "https://sentry.io/" ],
    ];

    for(i=0;i<29;i++){
        var index = Math.floor(Math.random()*images.length)
        var item = images[index];
        $('#sponsor'+i).attr("src", item[0]);
        $('#sponsor'+i).parent("a").attr("href", item[1]);
        images.splice(index,1);

    }



});
