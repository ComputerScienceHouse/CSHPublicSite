---
---

import {pathJoin} from "./utility.js";

class Sponsor { // this may be extra, ¯\_(ツ)_/¯
constructor(image, url, name) {
        this.image = pathJoin("{{ site.env.CSHPUBSITE_ASSETS_URL }}", image);
        this.url = url;
        this.name = name;
    }
}

$(document).ready(() => {
    if ($('#homepage-sponsors').length) {
        const sponsors = [
            new Sponsor('/sponsors/ritLarge.png', 'http://rit.edu', 'Rochester Institute of Technology'),
            new Sponsor('/sponsors/symantec.png', 'http://symantec.com', 'Symantec'),
            new Sponsor('/sponsors/att.png', 'http://att.com', 'AT&T'),
            new Sponsor('/sponsors/datto.png', 'http://datto.com', 'Datto'),
            new Sponsor('/sponsors/UofR.png', 'http://rochester.edu', 'University of Rochester'),
            new Sponsor('/sponsors/linkedin.png', 'http://linkedin.com', 'LinkedIn'),
            new Sponsor('/sponsors/microsoft.png', 'http://microsoft.com', 'Microsoft'),
            new Sponsor('/sponsors/cisco.png', 'http://cicso.com', 'Cisco'),
            new Sponsor('/sponsors/google.png', 'http://google.com', 'Google'),
            new Sponsor('/sponsors/hp.png', 'http://hp.com', 'HP'),
            new Sponsor('/sponsors/johnsonjohnson.png', 'http://jnj.com', 'Johnson and Johnson'),
            new Sponsor('/sponsors/lourdesindustries.png', 'http://lourdesinc.com', 'Lourdres Industries'),
            new Sponsor('/sponsors/mooreresearchcenter.png', 'http://mrci.com', 'Moore Research Center'),
            new Sponsor('/sponsors/intergraph.png', 'http://intergraph.com', 'Intergraph'),
            new Sponsor('/sponsors/janestreet.png', 'http://janestreet.com', 'Jane Street'),
            new Sponsor('/sponsors/northropgrumman.png', 'http://northropgrumman.com', 'Northrop Grumman'),
            new Sponsor('/sponsors/sonus.png', 'http://sonus.net', 'Sonus'),
            new Sponsor('/sponsors/oracle.png', 'http://oracle.com', 'Oracle'),
            new Sponsor('/sponsors/perforce.png', 'http://perforce.com', 'Perforce'),
            new Sponsor('/sponsors/cadence.png', 'http://cadence.com', 'Cadence'),
            new Sponsor('/sponsors/podi.png', 'http://podi.com', 'Potomac Digitek'),
            new Sponsor('/sponsors/dupont.png', 'http://dupont.com', 'DuPont'),
            new Sponsor('/sponsors/amdex.png', 'http://amdexcorp.com', 'Amdex'),
            new Sponsor('/sponsors/ti.png', 'http://ti.com', 'Texas Instruments'),
            new Sponsor('/sponsors/xerox.png', 'http://xerox.com', 'Xerox'),
            new Sponsor('/sponsors/citrix.png', 'http://citrix.com', 'Citrix'),
            new Sponsor('/sponsors/fxcm.png', 'http://fxcm.com', 'FXCM'),
            new Sponsor('/sponsors/pdhi.png', 'http://pdhi.com', 'PDHI'),
            new Sponsor('/sponsors/datadog.png', 'http://www.datadoghq.com/', 'Datadog'),
            new Sponsor('/sponsors/dmarcian.svg', 'http://dmarcian.com/', 'dmarcian'),
            new Sponsor('/sponsors/pritunl.png', 'https://pritunl.com/', 'Pritunl'),
            new Sponsor('/sponsors/sentry.svg', 'https://sentry.io/', 'Sentry'),
            new Sponsor('/sponsors/slack.png', 'https://slack.com/', 'Slack'),
            new Sponsor('/sponsors/proxmox.png', 'https://proxmox.com/', 'Proxmox'),
            new Sponsor('/sponsors/tenable.png', 'https://tenable.com/', 'Tenable'),
            new Sponsor('/sponsors/wayfair.png', 'https://wayfair.com/', 'Wayfair'),
            new Sponsor('/sponsors/johonnot.png', 'https://johonnottechnologies.com/', 'Johonnot'),

        ];

        for (let i = 0; i <= 6; i++) {
            var index = Math.floor(Math.random() * sponsors.length)
            var item = sponsors[index];
            $('#sponsor-' + i + ' img').attr('src', item.image);
            $('#sponsor-' + i + ' a').attr('href', item.url);
            $('#sponsor-' + i + ' img').attr('alt', item.name);
            sponsors.splice(index, 1);
        }
    }
});
