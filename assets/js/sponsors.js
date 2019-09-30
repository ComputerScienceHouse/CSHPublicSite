class Sponsor { // this may be extra, ¯\_(ツ)_/¯
    constructor(image, url, name) {
        this.image = image;
        this.url = url;
        this.name = name;
    }
}

$(document).ready(() => {
    if ($('#homepage-sponsors').length) {
        const sponsors = [
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/ritLarge.png', 'http://rit.edu', 'Rochester Instiute of Technology'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/symantec.png', 'http://symantec.com', 'Symantec'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/att.png', 'http://att.com', 'AT&T'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/datto.png', 'http://datto.com', 'Datto'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/UofR.png', 'http://rochester.edu', 'University of Rochester'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/linkedin.png', 'http://linkedin.com', 'LinkedIn'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/microsoft.png', 'http://microsoft.com', 'Microsoft'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/cisco.png', 'http://cicso.com', 'Cisco'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/google.png', 'http://google.com', 'Google'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/hp.png', 'http://hp.com', 'HP'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/johnsonjohnson.png', 'http://jnj.com', 'Johnson and Johnson'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/lourdesindustries.png', 'http://lourdesinc.com', 'Lourdres Industries'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/mooreresearchcenter.png', 'http://mrci.com', 'Moore Research Center'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/intergraph.png', 'http://intergraph.com', 'Intergraph'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/nortel.png', 'http://nortel-us.com', 'Nortel'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/janestreet.png', 'http://janestreet.com', 'Jane Street'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/northropgrumman.png', 'http://northropgrumman.com', 'Northrop Grumman'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/sonus.png', 'http://sonus.net', 'Sonus'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/oracle.png', 'http://oracle.com', 'Oracle'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/perforce.png', 'http://perforce.com', 'Perforce'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/cadence.png', 'http://cadence.com', 'Cadence'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/podi.png', 'http://podi.com', 'Potomac Digitek'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/dupont.png', 'http://dupont.com', 'DuPont'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/amdex.png', 'http://amdexcorp.com', 'Amdex'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/ti.png', 'http://ti.com', 'Texas Instruments'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/xerox.png', 'http://xerox.com', 'Xerox'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/citrix.png', 'http://citrix.com', 'Citrix'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/fxcm.png', 'http://fxcm.com', 'FXCM'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/pdhi.png', 'http://pdhi.com', 'PDHI'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/datadog.png', 'http://www.datadoghq.com/', 'Datadog'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/dmarcian.svg', 'http://dmarcian.com/', 'dmarcian'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/pritunl.png', 'https://pritunl.com/', 'Pritunl'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/sentry.svg', 'https://sentry.io/', 'Sentry'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/slack.png', 'https://slack.com/', 'Slack'),
            new Sponsor('https://assets.csh.rit.edu/pubsite/sponsors/proxmox.png', 'https://proxmox.com/', 'Proxmox'),
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
