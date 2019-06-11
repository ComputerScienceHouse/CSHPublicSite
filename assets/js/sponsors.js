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
            new Sponsor('/assets/images/sponsors/ritLarge.png', 'http://rit.edu', 'Rochester Instiute of Technology'),
            new Sponsor('/assets/images/sponsors/symantec.png', 'http://symantec.com', 'Symantec'),
            new Sponsor('/assets/images/sponsors/att.png', 'http://att.com', 'AT&T'),
            new Sponsor('/assets/images/sponsors/datto.png', 'http://datto.com', 'Datto'),
            new Sponsor('/assets/images/sponsors/UofR.png', 'http://rochester.edu', 'University of Rochester'),
            new Sponsor('/assets/images/sponsors/linkedin.png', 'http://linkedin.com', 'LinkedIn'),
            new Sponsor('/assets/images/sponsors/microsoft.png', 'http://microsoft.com', 'Microsoft'),
            new Sponsor('/assets/images/sponsors/cisco.png', 'http://cicso.com', 'Cisco'),
            new Sponsor('/assets/images/sponsors/google.png', 'http://google.com', 'Google'),
            new Sponsor('/assets/images/sponsors/hp.png', 'http://hp.com', 'HP'),
            new Sponsor('/assets/images/sponsors/johnsonjohnson.png', 'http://jnj.com', 'Johnson and Johnson'),
            new Sponsor('/assets/images/sponsors/lourdesindustries.png', 'http://lourdesinc.com', 'Lourdres Industries'),
            new Sponsor('/assets/images/sponsors/mooreresearchcenter.png', 'http://mrci.com', 'Moore Research Center'),
            new Sponsor('/assets/images/sponsors/intergraph.png', 'http://intergraph.com', 'Intergraph'),
            new Sponsor('/assets/images/sponsors/nortel.png', 'http://nortel-us.com', 'Nortel'),
            new Sponsor('/assets/images/sponsors/janestreet.png', 'http://janestreet.com', 'Jane Street'),
            new Sponsor('/assets/images/sponsors/northropgrumman.png', 'http://northropgrumman.com', 'Northrop Grumman'),
            new Sponsor('/assets/images/sponsors/sonus.png', 'http://sonus.net', 'Sonus'),
            new Sponsor('/assets/images/sponsors/oracle.png', 'http://oracle.com', 'Oracle'),
            new Sponsor('/assets/images/sponsors/perforce.png', 'http://perforce.com', 'Perforce'),
            new Sponsor('/assets/images/sponsors/cadence.png', 'http://cadence.com', 'Cadence'),
            new Sponsor('/assets/images/sponsors/podi.png', 'http://podi.com', 'Potomac Digitek'),
            new Sponsor('/assets/images/sponsors/dupont.png', 'http://dupont.com', 'DuPont'),
            new Sponsor('/assets/images/sponsors/amdex.png', 'http://amdexcorp.com', 'Amdex'),
            new Sponsor('/assets/images/sponsors/ti.png', 'http://ti.com', 'Texas Instruments'),
            new Sponsor('/assets/images/sponsors/xerox.png', 'http://xerox.com', 'Xerox'),
            new Sponsor('/assets/images/sponsors/citrix.png', 'http://citrix.com', 'Citrix'),
            new Sponsor('/assets/images/sponsors/fxcm.png', 'http://fxcm.com', 'FXCM'),
            new Sponsor('/assets/images/sponsors/pdhi.png', 'http://pdhi.com', 'PDHI'),
            new Sponsor('/assets/images/sponsors/datadog.png', 'http://www.datadoghq.com/', 'Datadog'),
            new Sponsor('/assets/images/sponsors/dmarcian.svg', 'http://dmarcian.com/', 'dmarcian'),
            new Sponsor('/assets/images/sponsors/pritunl.png', 'https://pritunl.com/', 'Pritunl'),
            new Sponsor('/assets/images/sponsors/sentry.svg', 'https://sentry.io/', 'Sentry'),
            new Sponsor('/assets/images/sponsors/slack.png', 'https://slack.com/', 'Slack'),
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
